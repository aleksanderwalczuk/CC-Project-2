import { getQuestion, initGame } from './quiz';

class Game {
  constructor() {
    this.timeLeft = process.env.QUIZ_MAX_TIME_SECONDS;
  }

  reduceTime() {
    this.timeLeft -= 1;
  }

  addAnswer(answer) {
    this.answers.push(answer);
  }

  addQuestion(question) {
    this.questions.push(question);
  }
}

const calculateTimeLeft = (game) => {
  const interval = setInterval(() => {
    game.reduceTime();
    if (game.timeLeft === 0) {
      clearInterval(interval);
    }
  }, 1000);
};

const processGame = (mode, url) => {
  const game = new Game();
  initGame(mode, url);
  calculateTimeLeft(game);
  while (game.timeLeft > 0) {
    game.addQuestion(getQuestion);
  }
};

export default processGame;
