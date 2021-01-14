export const HumanPlayer = () => {
  const player = {
    askQuestion(question, callback) {
      if (!question) throw new Error('There is no question');
      callback(question);
    },

    getAnswer(answer, callback) {
      if (!answer) throw new Error('There is no answer');
      callback(answer);
    },
  };
  return player;
};

export default HumanPlayer;
