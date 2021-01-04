import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import { initGame, getQuestion } from './Quiz';

const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  quiz.append(buttonRules);
  initGame('people', options.swApiBaseUrl);
  getQuestion();
};

export default App;
