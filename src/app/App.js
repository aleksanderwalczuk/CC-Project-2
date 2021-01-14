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

import elemFactory from './utils/elementFactory';
import render from './utils/render';

const App = ({ options }) => {
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
  render('#swquiz-app', modalWindow);
};

export default App;
