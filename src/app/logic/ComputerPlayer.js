import getRandomInt from '../utils/getRandomInt';

export const ComputerPlayer = () => {
  const player = {
    askQuestion(question, callback) {
      if (!question) throw new Error('There is no question');
      callback(question);
    },

    getAnswer(answers, callback) {
      if (!answers) throw new Error('There is no answers');
      callback(answers[getRandomInt(0, 3)]);
    },
  };
  return player;
};

export default ComputerPlayer;
