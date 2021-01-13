import isAnswerCorrect from '../logic/isAnswerCorrect';

const Answers = (answers, correctAnswer, callback) => {
  const answersElement = document.createElement('div');
  answersElement.classList.add('answers');
  answers.forEach((answer) => {
    const answerElement = document.createElement('div');
    answerElement.classList.add('button');
    answerElement.classList.add('button__answer');
    answerElement.addEventListener('click', () => {
      if (answersElement.hasAttribute('disabled')) {
        return;
      }
      const correct = isAnswerCorrect(answer, correctAnswer);
      if (correct) {
        answerElement.classList.add('button__answer--success');
      } else {
        answerElement.classList.add('button__answer--fail');
      }
      answersElement.setAttribute('disabled', true);
      callback(answer, correct);
    });
    answerElement.innerText = answer;
    answersElement.append(answerElement);
  });

  return answersElement;
};

export default Answers;
