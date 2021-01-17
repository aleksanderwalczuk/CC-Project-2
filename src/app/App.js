import { LoadPage } from './components/MainMenu';
import { startGame, displayAnswer } from './components/GameOn'

const App = ({ options }) => {
  LoadPage();
  startGame(true, 'people');
  displayAnswer(['raz', 'dwa', 'trzy', 'cztery'], 'trzy');
};

export default App;
