import createButtonRed from './components/ButtonRed';

const App = ({ options }) => {
  const optionsContainer = document.querySelector(
    '.options-container',
  );
  const buttonPlay = createButtonRed('play the game');
  optionsContainer.append(buttonPlay);
};
export default App;
