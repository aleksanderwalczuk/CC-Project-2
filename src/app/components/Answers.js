import isAnswerCorrect from '../logic/isAnswerCorrect';
import elementFactory from '../utils/elementFactory';
import validateString from '../utils/validateString';

const createAnswerElement = (
  answerText,
  isCorrect,
  answersElement,
  callback,
) => {
  const answerElement = elementFactory('div', {
    className: 'button button__answer',
  });
  answerElement.addEventListener('click', () => {
    if (answersElement.hasAttribute('disabled')) {
      return;
    }
    answerElement.classList.add(
      `button__answer--${isCorrect ? 'success' : 'fail'}`,
    );

    answersElement.setAttribute('disabled', true);
    setTimeout(() => callback(answerText, isCorrect), 1000);
  });
  answerElement.innerText = answerText;
  return answerElement;
};

const Answers = (answers, correctAnswer, callback) => {
  const answersElement = elementFactory('div', {
    className: 'answers',
  });
  answers.forEach((answerText) => {
    if (!validateString(answerText)) {
      throw new Error('Not a valid string');
    }
    const isCorrect = isAnswerCorrect(answerText, correctAnswer);
    const answerElement = createAnswerElement(
      answerText,
      isCorrect,
      answersElement,
      callback,
    );
    answersElement.appendChild(answerElement);
  });

  return answersElement;
};

export default Answers;
