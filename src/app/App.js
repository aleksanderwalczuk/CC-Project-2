import createWhiteButtonWithIcon from './components/ButtonWhiteWithIcon';
import VerifyingAnswerIsCorrect from './Components/VerifyingIfAnswerIsCorrect';

const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  const buttonRules = createWhiteButtonWithIcon(
    'Rules',
    'fa',
    'fa-graduation-cap',
  );
  quiz.append(buttonRules);
};

export default App;
