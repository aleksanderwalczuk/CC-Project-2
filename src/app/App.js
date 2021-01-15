import ModalWindow from './components/ModalWindow';
import handleModalClose from './logic/handleModalClose'
// MOCK DATA TO BE REMOVED
import {
  game,
  humanPlayerGame,
  computerPlayerGame,
} from './mockResponse';

import elemFactory from './utils/elementFactory';
import render from './utils/render';

const App = ({ options }) => {
  // CREATE MODAL WINDOW
  const modalWindow = ModalWindow(
    game,
    humanPlayerGame,
    computerPlayerGame,
    handleModalClose,
  );
  // SHOULD BE APPENDED WHEN THE TIME ENDS - TO BE REMOVED
  render('#swquiz-app', modalWindow);
};

export default App;
