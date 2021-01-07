class PlayerHuman {
  askQuestion(question, callback) {
    if (!question) throw new Error('There is no question');
    callback(question);
  }

  getAnswer(answer, callback) {
    if (!answer) throw new Error('There is no answer');
    callback(answer);
  }
}

export default PlayerHuman;
