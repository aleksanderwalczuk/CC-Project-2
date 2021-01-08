import VisualImage from './components/VisualImage';
import Logo from './components/Logo';
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';
import ModalWindow from './components/ModalWindow';

const App = ({ options }) => {
  Logo();

  VisualImage('../../static/assets/img/modes/people/1.jpg');

  const quiz = document.querySelector('#swquiz-app');
  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');
  quiz.append(gameModeInfo, buttonRules, buttonPlay);



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
  function closeModal(modal) {
    modal.style.display = 'none';
  }
  const modalWindow = ModalWindow(
    humanPlayerGame,
    computerPlayerGame,
    closeModal,
  );
  quiz.append(modalWindow);
};

export default App;
