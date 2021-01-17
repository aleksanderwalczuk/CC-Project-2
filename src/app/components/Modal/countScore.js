function countScore({ questionsAnswered, questionsGuessed }) {
  const areNumbers =
    Number.isInteger(questionsAnswered) &&
    Number.isInteger(questionsAnswered);
  if (questionsAnswered === 0 || !areNumbers) {
    return 0;
  }
  return (
    questionsGuessed * 2 - (questionsAnswered - questionsGuessed)
  );
}

export default countScore;
