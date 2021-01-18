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
      rightAnswer: 'jAR jAR bINKS',
    },
    {
      image: '../../static/assets/img/modes/vehicles/14.jpg',
      answers: [
        'Luke Skywalker',
        'Leia Organa',
        'Darth Vader',
        'Wicket Systri Warrick',
      ],
      rightAnswer: 'Wicket Systri Warrick',
    },
    {
      image: '../../static/assets/img/modes/starships/10.jpg',
      answers: [
        'fire suppression ship',
        'Jabba Desilijic Tiure',
        'Armed government transport',
        'Deep Space Mobile Battlestation',
      ],
      rightAnswer: 'Deep Space Mobile Battlestation',
    },
    {
      image: '../../static/assets/img/modes/people/4.jpg',
      answers: [
        'Beru Whitesun lars',
        'Leia Organa',
        'Darth Vader',
        'Darth Sidious',
      ],
      rightAnswer: 'Armed government transport',
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
    { answer: 'Jabba Desilijic Tiure', isCorrect: true },
    { answer: 'Beru Whitesun lars', isCorrect: true },
    { answer: 'Deep Space Mobile Battlestation', isCorrect: false },
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
    { answer: 'Deep Space Mobile Battlestation', isCorrect: false },
    { answer: 'Darth Vader', isCorrect: true },
  ],
};

export { game, humanPlayerGame, computerPlayerGame };
