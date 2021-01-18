import Answers from '../components/Answers';
import ModalWindow from '../components/Modal/ModalWindow';
import { updateImage } from '../components/VisualImage';
import createComputerPlayer from './ComputerPlayer';
import createPlayer from './Player';
import generateQuestion, {
  initGameInfo,
  isGameInitialized,
} from './quiz';

class Game {
  initGame(mode) {
    this.timeLeft = process.env.QUIZ_MAX_TIME_SECONDS;
    this.questions = [];
    this.mode = mode;
    this.running = false;
    this.computerPlayer = createComputerPlayer();
    this.humanPlayer = createPlayer();
  }

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

  getHumanPlayer() {
    return this.humanPlayer;
  }

  reduceTime() {
    this.timeLeft -= 0.1;
  }

  addQuestion(question) {
    this.questions.push(question);
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

  getComputerPlayerAnswers() {
    return this.computerPlayer.getModalData();
  }

  getHumanPlayerAnswers() {
    return this.humanPlayer.getModalData();
  }

  sendAnswerToPlayerCallback() {
    return this.humanPlayer.getAnswer;
  }

  sendQuestionToComputerPlayer({ answers, rightAnswer }) {
    this.computerPlayer.getAnswer(answers, rightAnswer);
  }
}

const game = new Game();

const spreadQuestion = (question) => {
  game.sendQuestionToComputerPlayer(question);
  updateImage(question.image);
  // TODO: displayAnswers(...) - from GameOn
  Answers(
    question.answers,
    question.rightAnswer,
    game.getHumanPlayer(),
  );
};

const verifyImage = (question) => {
  if (game.getRunning()) {
    if (question.image.startsWith('data:image')) {
      game.addQuestion(question);
      spreadQuestion(question);
    } else {
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
  const question = generateQuestion();
  if (!question.err) {
    verifyQuestion(question);
  } else {
    getNewQuestion();
  }
};

const closeGame = (interval) => {
  clearInterval(interval);
  if (game.getRunning()) {
    game.changeRunningFlag();
    // displayModal(...) - from GameOn
    ModalWindow(
      game.generateObjectForModal(),
      game.getHumanPlayerAnswers(),
      game.getComputerPlayerAnswers(),
    );
  }
};

const runGame = () => {
  // TODO: executeGame(game.getMode())  - from GameOn
  game.changeRunningFlag();
  getNewQuestion();
  const interval = setInterval(() => {
    game.reduceTime();
    if (Math.round(game.timeLeft) === 0 || !game.getRunning()) {
      closeGame(interval);
    }
  }, 100);
};

const startGame = (mode) => {
  game.initGame(mode);
  runGame();
};

export const processGame = (
  mode = 'people',
  url = process.env.SW_API_BASE_URL,
) => {
  initGameInfo(mode, url || 'https://swapi.dev/api');
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

export const getTimeLeft = () => ({
  isRunning: game.getRunning(),
  timeLeft: game.getTimeLeft(),
});
export const cancelGame = () => {
  if (game.getRunning()) {
    game.changeRunningFlag();
  }
};
export default getNewQuestion;
