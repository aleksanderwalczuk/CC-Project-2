function countScore({ questionsAnswered, questionsGuessed }) {
  return (
    questionsGuessed * 2 - (questionsAnswered - questionsGuessed)
  );
}

export default countScore;
