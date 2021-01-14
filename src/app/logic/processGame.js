import Answers from '../components/Answers';
import VisualImage from '../components/VisualImage';
import { getQuestion, initGame, isGameInitialized } from './quiz';
import { ComputerPlayer } from './ComputerPlayer';
import { HumanPlayer } from './HumanPlayer';

class Game {
  getTimeLeft() {
    return this.timeLeft;
  }

  getMode() {
    return this.mode;
  }

  getRunning() {
    return this.running;
  }

  getQuestions() {
    return this.questions;
  }

  reduceTime() {
    this.timeLeft -= 0.5;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  prepareNewGame(mode) {
    this.timeLeft = process.env.QUIZ_MAX_TIME_SECONDS;
    this.questions = [];
    this.mode = mode;
    this.running = false;
    this.computerPlayer = ComputerPlayer();
    this.humanPlayer = HumanPlayer();
  }

  changeRunningFlag() {
    this.running = !this.running;
  }

  generateObjectForModal() {
    return {
      mode: this.mode,
      questions: this.questions,
    };
  }

  sendAnswerToPlayerCallback() {
    // TODO: change callback, when #74 will be merged
    return this.humanPlayer.getAnswer;
  }

  sendQuestionToComputerPlayer(question) {
    // TODO: change function call, when #74 will be merged
    this.computerPlayer.getAnswer(
      question.answers,
      question.rightAnswer,
    );
  }
}

const game = new Game();

const spreadQuestion = (question) => {
  game.sendQuestionToComputerPlayer(question);
  VisualImage(question.image);
  Answers(
    question.answers,
    question.rightAnswer,
    game.sendAnswerToPlayerCallback,
    // Eslint warn, function call before definition
    // eslint-disable-next-line no-use-before-define
    askQuestion,
  );
};

const verifyImage = (question) => {
  if (game.getRunning()) {
    if (question.image.startsWith('data:image')) {
      game.addQuestion(question);
      spreadQuestion(question);
    } else {
      // Eslint warn. Function called before declaration.
      // eslint-disable-next-line no-use-before-define
      getNewQuestion();
    }
  }
};

const verifyQuestion = (question) => {
  const interval = setInterval(() => {
    if (question.image !== undefined) {
      clearInterval(interval);
      verifyImage(question);
    }
  }, 100);
};

const getNewQuestion = () => {
  const question = getQuestion();
  if (question.err === '' || question.err === undefined) {
    verifyQuestion(question);
  } else {
    getNewQuestion();
  }
};

const closeGame = (interval) => {
  clearInterval(interval);
  if (game.getRunning()) {
    game.changeRunningFlag();
    // TODO: send_to_modal(game.generateObjectForModal());
  }
};

const runGame = () => {
  // TODO: call function, when #49 will be merged - TimeRemaining();
  game.changeRunningFlag();
  getNewQuestion();
  const interval = setInterval(() => {
    game.reduceTime();
    if (game.timeLeft === 0 || !game.getRunning()) {
      closeGame(interval);
    }
  }, 500);
};

const startGame = (mode) => {
  game.prepareNewGame(mode);
  runGame();
};

const processGame = (
  mode = 'people',
  url = process.env.SW_API_BASE_URL,
) => {
  initGame(mode, url || 'https://swapi.dev/api');
  let initializeTimeout = 3;
  const gameInitializing = setInterval(() => {
    if (isGameInitialized()) {
      clearInterval(gameInitializing);
      startGame(mode);
    }
    initializeTimeout -= 1;
    if (initializeTimeout === 0) {
      clearInterval(gameInitializing);
      throw new Error('Cannot initialize game');
    }
  }, 1000);
};

export default processGame;
export const getTimeLeft = () => ({
  isRunning: game.getRunning(),
  timeLeft: game.getTimeLeft(),
});
export const askQuestion = () => getNewQuestion();
export const cancelGame = () => {
  if (game.getRunning()) {
    game.changeRunningFlag();
  }
};
