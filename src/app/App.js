import { LoadPage } from './components/MainMenu';
import render from './utils/render';
import ModalWindow from './components/Modal/ModalWindow';
// MOCK DATA TO BE REMOVED
import {
  game,
  humanPlayerGame,
  computerPlayerGame,
} from './mockResponse';

const App = ({ options }) => {
  LoadPage();

  // CREATE MODAL WINDOW
  const modalWindow = ModalWindow(
    game,
    humanPlayerGame,
    computerPlayerGame,
  );
  render('#swquiz-app', modalWindow);
};

export default App;
