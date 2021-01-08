import { initGame } from './quiz';

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
};

export default processGame;
