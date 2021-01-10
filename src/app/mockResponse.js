const game = {
  mode: 'People', // do utworzenia CONSTANTS z trzema nazwami trybów
  questions: [
    {
      image: '../../static/assets/img/modes/people/1.jpg',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: '../../static/assets/img/modes/people/2.jpg',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: '../../static/assets/img/modes/people/3.jpg',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Darth Vader',
    },
    {
      image: '../../static/assets/img/modes/people/4.jpg',
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
  detailedAnswers: [
    // 'Luke Skywalker',
    // or ?
    { answer: 'Darth Vader', isCorrect: true },
    { answer: 'Darth Vader', isCorrect: true },
    { answer: 'Luke Skywalker', isCorrect: false },
  ],
};

const computerPlayerGame = {
  name: 'Computer',
  questionsGuessed: 1,
  questionsAnswered: 4,
  detailedAnswers: [
    // 'Luke Skywalker',
    // or ?
    { answer: 'Luke Skywalker', isCorrect: false },
    { answer: 'Luke Skywalker', isCorrect: false },
    { answer: 'Luke Skywalker', isCorrect: false },
    { answer: 'Darth Vader', isCorrect: true },
  ],
};

export { game, humanPlayerGame, computerPlayerGame };
