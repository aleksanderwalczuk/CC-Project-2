import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import elementFactory from '../utils/elementFactory';

const handleGame = (chosenMode) => {
  const section = document.querySelector('.section');
  const sectionWrapper = document.querySelector('.section__wrapper');
  const answersWrapper = elementFactory('div', {
    className: 'answers-wrapper',
  });

  sectionWrapper.innerHTML = '';
  sectionWrapper.appendChild(GameModeName(chosenMode));
  sectionWrapper.appendChild(answersWrapper);

  section.appendChild(RemainingTime());
};

const displayAnswers = (answers, correctAnswer, humanPlayer) => {
  const answersWrapper = document.querySelector('.answers-wrapper');
  answersWrapper.innerHTML = '';
  answersWrapper.appendChild(
    Answers(answers, correctAnswer, humanPlayer),
  );
};

export { handleGame, displayAnswers };
