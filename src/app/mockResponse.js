const game = {
  mode: 'People', // do utworzenia CONSTANTS z trzema nazwami trybów
  questions: [
    {
      image: 'base64imagestring',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: 'base64imagestring',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: 'base64imagestring',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: 'base64imagestring',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
  ],
};

// humanPlayer and computerPlayer to conform with informations that appear by the end of the game
const humanPlayerGame = {
  name: null,
  questionsGuessed: 2,
  questionsAnswered: 3,
  detailedAnswers: ['Luke Skywalker', 'Darth Sidious', 'Darth Vader'],
};

const computerPlayerGame = {
  name: 'Computer',
  questionsGuessed: 1,
  questionsAnswered: 4,
  detailedAnswers: [
    'Luke Skywalker',
    // or ?
    // { answer: 'Luke', isCorrect: true }
    'Luke Skywalker',
    'Luke Skywalker',
    'Luke Skywalker',
  ],
};

export { game, humanPlayerGame, computerPlayerGame };
