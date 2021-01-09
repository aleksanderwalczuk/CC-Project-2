// humanPlayer and computerPlayer to conform with informations that appear by the end of the game
const humanPlayerGame = {
  name: null,
  questionsGuessed: 2,
  questionsAnswered: 3,
  detailedQuestions: [
    {
      url: '../../static/assets/img/modes/people/1.jpg',
      playersAnswer: 'Darth Vader',
      correctAnswer: 'Darth Vader',
      isCorrect: true,
    },
    {
      url: '../../static/assets/img/modes/people/2.jpg',
      playersAnswer: 'Jar Jar Binks',
      correctAnswer: 'Darth Vader',
      isCorrect: false,
    },
    {
      url: '../../static/assets/img/modes/people/3.jpg',
      playersAnswer: 'Luke Skywalker',
      correctAnswer: 'Luke Skywalker',
      isCorrect: true,
    },
  ],
};

const computerPlayerGame = {
  name: 'Computer',
  questionsGuessed: 1,
  questionsAnswered: 3,
  detailedQuestions: [
    {
      url: '../../static/assets/img/modes/people/1.jpg',
      playersAnswer: 'Darth Vader',
      correctAnswer: 'Darth Vader',
      isCorrect: true,
    },
    {
      url: '../../static/assets/img/modes/people/2.jpg',
      playersAnswer: 'Jar Jar Binks',
      correctAnswer: 'Darth Vader',
      isCorrect: false,
    },
    {
      url: '../../static/assets/img/modes/people/3.jpg',
      playersAnswer: 'Darth Vader',
      correctAnswer: 'Luke Skywalker',
      isCorrect: false,
    },
  ],
};

export { humanPlayerGame, computerPlayerGame };
