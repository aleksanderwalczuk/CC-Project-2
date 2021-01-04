import ButtonRed from './components/ButtonRed';

const App = ({ options }) => {
  const optionsContainer = document.querySelector('#swquiz-app');
  const buttonPlay = ButtonRed('play the game');
  optionsContainer.append(buttonPlay);
};
export default App;
