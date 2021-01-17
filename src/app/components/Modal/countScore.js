function countScore({ questionsAnswered, questionsGuessed }) {
  const areNumbers =
    Number.isInteger(questionsAnswered) &&
    Number.isInteger(questionsGuessed);
  if (questionsAnswered === 0 || !areNumbers) {
    return 0;
  }
  return (
    questionsGuessed * 2 - (questionsAnswered - questionsGuessed)
  );
}

export default countScore;
