function prepareDataForDetailsTable(quiz, humanData, computerData) {
  const humanAnswers = humanData.detailedAnswers;
  const computerAnswers = computerData.detailedAnswers;
  const { questions } = quiz;
  const rightAnswers = questions.map(
    (question) => question.rightAnswer,
  );
  const paths = questions.map((question) => question.image);
  return [humanAnswers, computerAnswers, rightAnswers, paths];
}

export default prepareDataForDetailsTable;
