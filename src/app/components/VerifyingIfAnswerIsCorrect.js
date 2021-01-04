
export default function VerifyingAnswerIsCorrect(userAnswer, rightAnswer) {
  const userAnswerIsCorrect = { correct: "" };
  userAnswer === rightAnswer ? userAnswerIsCorrect.correct = true : userAnswerIsCorrect.correct = false;
  return userAnswerIsCorrect
}; 