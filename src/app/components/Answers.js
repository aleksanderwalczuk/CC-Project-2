import isAnswerCorrect from '../logic/isAnswerCorrect';
import elementFactory from '../utils/elementFactory';
import validateString from '../utils/validateString';

const createAnswerElement = (
  answerText,
  correct,
  answersElement,
  onAnsweredQuestion,
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
      `button__answer--${correct ? 'success' : 'fail'}`,
    );

    answersElement.setAttribute('disabled', true);
    onAnsweredQuestion(answerText, correct, callback);
  });
  answerElement.innerText = answerText;
  return answerElement;
};

const Answers = (
  answers,
  correctAnswer,
  onAnsweredQuestion,
  callback,
) => {
  const answersElement = elementFactory('div', {
    className: 'answers',
  });
  answers.forEach((answerText) => {
    if (!validateString(answerText)) {
      throw new Error('Not a valid string');
    }
    const correct = isAnswerCorrect(answerText, correctAnswer);
    const answerElement = createAnswerElement(
      answerText,
      correct,
      answersElement,
      onAnsweredQuestion,
      callback,
    );
    answersElement.appendChild(answerElement);
  });

  return answersElement;
};

export default Answers;
