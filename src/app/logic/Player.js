export class Player {
  constructor() {
    this.allAnswers = [];
    this.correctAnswersCounter = 0;
  }

  getModalData() {
    return {
      score: this.correctAnswersCounter,
      answers: this.allAnswers,
    };
  }

  getAnswer(answer, isCorrect, callback) {
    if (!answer) throw new Error('There is no answer');
    if (isCorrect) this.correctAnswersCounter += 1;
    this.allAnswers.push(answer);
    if (typeof callback === 'function') callback(answer);
  }
}

function createPlayer() {
  return new Player();
}

export default createPlayer;
