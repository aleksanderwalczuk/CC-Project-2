import mainMenu from './Components/MenuOptions';

const App = ({ options }) => {
  const quiz = document.querySelector('#swquiz-app');
  quiz.append(mainMenu);
};
export default App;
