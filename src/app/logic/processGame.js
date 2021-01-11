import { getQuestion, initGame } from './quiz';

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

  newGame(mode) {
    this.timeLeft = process.env.QUIZ_MAX_TIME_SECONDS;
    this.questions = [];
    this.mode = mode;
  }

  changeRunningFlag() {
    this.running = !this.running;
  }
}

const game = new Game();

// Will be finished when functions to display questions will be ready (eslint, ts warn - unused argument)
// eslint-disable-next-line no-unused-vars
const spreadQuestion = (_question) => {
  // TODO: send question to computer player
  // TODO: send question to human player
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
  game.changeRunningFlag();
  clearInterval(interval);
  /* Object send to end game modal
  {
    mode: game.mode,
    questions: game.questions,
  }
  */
  // TODO: send game data to modal
};

const gameRunning = () => {
  game.changeRunningFlag();
  const interval = setInterval(() => {
    game.reduceTime();
    if (game.timeLeft === 0) {
      closeGame(interval);
    }
    getNewQuestion();
  }, 500);
};

const processGame = (mode, url = process.env.SW_API_BASE_URL) => {
  game.newGame(mode);
  initGame(game.mode, url);
  gameRunning(game);
};

export default processGame;
export const getTimeLeft = () => ({
  isRunning: game.isRunning,
  timeLeft: game.getTimeLeft,
});
export const addAnswer = (answer) => game.addAnswer(answer);
export const askQuestion = () => getNewQuestion();
