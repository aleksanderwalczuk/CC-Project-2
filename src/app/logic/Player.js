import getNewQuestion from './processGame';

export class Player {
  constructor() {
    this.detailedAnswers = [];
    this.questionsGuessed = 0;
    this.questionsAnswered = 0;
  }

  getModalData() {
    return {
      detailedAnswers: this.detailedAnswers,
      questionsGuessed: this.questionsGuessed,
      questionsAnswered: this.questionsAnswered,
    };
  }

  getAnswer(answer, isCorrect, callback) {
    if (!answer) throw new Error('There is no answer');
    if (isCorrect) this.questionsGuessed += 1;
    this.detailedAnswers.push({ answer, isCorrect });
    this.questionsAnswered += 1;
    callback();
  }
}

function createPlayer() {
  return new Player();
}

export default createPlayer;
