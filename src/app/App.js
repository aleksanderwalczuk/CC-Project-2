import createButtonRed from './components/ButtonRed';
import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import createMenuOptions from './components/MenuOptions';

const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonPlay = createButtonRed('play the game');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  createMenuOptions();
  quiz.append(buttonRules, buttonPlay);
};

export default App;
