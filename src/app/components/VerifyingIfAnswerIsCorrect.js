
export default function VerifyingAnswerIsCorrect() {
  const userAnswerIsCorrect = { correct: "" };
  function verifyingAnswer(userAnswer, rightAnswer) {
    userAnswer === rightAnswer ? userAnswerIsCorrect.correct = true : userAnswerIsCorrect.correct = false;

    console.log(userAnswerIsCorrect);
    return userAnswerIsCorrect
  }

}; 