import Answers from './Answers';
import RemainingTime from './RemainingTime';
import GameModeName from './GameModeName';
import { PEOPLE } from '../constants';
import elementFactory from '../utils/elementFactory';

const startGame = (gameStarted, choosenMode) => {
  if (gameStarted === true) {
    const section = document.querySelector('.section');
    const sectionWrapper = document.querySelector(
      '.section__wrapper',
    );
    const placeholder = elementFactory('div', {
      className: 'placeholder',
    });

    sectionWrapper.innerHTML = '';
    sectionWrapper.appendChild(GameModeName(choosenMode));
    sectionWrapper.appendChild(placeholder);

    section.appendChild(RemainingTime());
  }
};

const displayAnswer = (
  answers,
  correctAnswer,
  onAnsweredQuestion,
  callback,
) => {
  const sectionWrapper = document.querySelector('.section__wrapper');
  const placeholder = document.querySelector('.placeholder');

  sectionWrapper.removeChild(placeholder);
  sectionWrapper.appendChild(
    Answers(answers, correctAnswer, onAnsweredQuestion, callback),
  );
};

export { startGame, displayAnswer };
