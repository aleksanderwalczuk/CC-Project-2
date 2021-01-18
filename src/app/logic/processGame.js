import { updateImage } from '../components/VisualImage';
import {
  handleGame,
  displayAnswers,
  displayModal,
} from '../components/GameOn';
import generateQuestion, {
  initGameInfo,
  isGameInitialized,
} from './quiz';
import Game from './Game';
// import ModalWindow from '../components/Modal/ModalWindow';
import { PEOPLE } from '../constants';

const game = new Game();

const getNewQuestion = () => {
  const question = generateQuestion();
  if (!question.err) {
    verifyQuestion(question);
  } else {
    getNewQuestion();
  }
};

const spreadQuestion = (question) => {
  game.sendQuestionToComputerPlayer(question);
  updateImage(question.image);
  displayAnswers(
    question.answers,
    question.rightAnswer,
    game.getHumanPlayer(),
    getNewQuestion,
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

const closeGame = (interval) => {
  clearInterval(interval);
  if (game.getRunning()) {
    game.changeRunningFlag();
    displayModal(
      game.generateObjectForModal(),
      game.getHumanPlayerAnswers(),
      game.getComputerPlayerAnswers(),
      game.callback,
    );
  }
};

const runGame = (mode) => {
  handleGame(mode, getTimeLeft);
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
  runGame(mode);
};

export const processGame = (
  mode = PEOPLE,
  callback,
  url = process.env.SW_API_BASE_URL,
) => {
  game.callback = callback;
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
