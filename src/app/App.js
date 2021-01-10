import VisualImage from './components/VisualImage';
import Logo from './components/Logo';
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';
import ModalWindow from './components/ModalWindow';
// MOCK DATA TO BE REMOVED
import {
  game,
  humanPlayerGame,
  computerPlayerGame,
} from './mockResponse';

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
  // quiz.append(gameModeInfo, buttonRules, buttonPlay);

  // FUNCTION TO BE PASSED TO MODAL - EXAMPLE - TO BE REMOVED FROM APP PROBABLY
  function closeModal(event) {
    event.preventDefault();
    const playersName = document.querySelector('.player-form__input')
      .value;
    quiz.removeChild(document.querySelector('.modal'));
    console.log(`close the modal ${playersName}`);
    return playersName;
  }
  // CREATE MODAL WINDOW
  const modalWindow = ModalWindow(
    game,
    humanPlayerGame,
    computerPlayerGame,
    closeModal,
  );
  // SHOULD BE APPENDED WHEN THE TIME ENDS - TO BE REMOVED
  quiz.appendChild(modalWindow);
};

export default App;
