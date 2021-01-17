import VisualImage from './components/VisualImage';
import Logo from './components/Logo';
import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createGameModeName from './components/GameModeName';
import createRemainingTime from './components/RemainingTime';
import render from './utils/render';
import ModalWindow from './components/Modal/ModalWindow';
// import handleModalClose from './logic/handleModalClose'
// MOCK DATA TO BE REMOVED
import {
  game,
  humanPlayerGame,
  computerPlayerGame,
} from './mockResponse';

const App = ({ options }) => {
  // Logo();

  // VisualImage('../../static/assets/img/modes/people/1.jpg');

  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  const gameModeInfo = createGameModeName('Who is this character?');
  // const remainingTime = createRemainingTime();

  render(
    '#swquiz-app',
    // gameModeInfo,
    buttonRules,
    buttonPlay,
    // remainingTime,
  );

    // CREATE MODAL WINDOW
    const modalWindow = ModalWindow(
      game,
      humanPlayerGame,
      computerPlayerGame,
      // handleModalClose,
    )
    render('#swquiz-app', modalWindow);
};

export default App;
