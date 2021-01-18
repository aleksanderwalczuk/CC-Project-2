import createComputerPlayer from './ComputerPlayer';
import createPlayer from './Player';

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

export default Game;
