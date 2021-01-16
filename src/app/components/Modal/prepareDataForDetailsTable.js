function prepareDataForDetailsTable(quiz, humanData, computerData) {
  const { questions } = quiz;
  const { detailedAnswers: computerAnswers } = computerData;
  const { detailedAnswers: humanAnswers } = humanData;
  const initialAccumulator = {
    rightAnswers: [],
    paths: [],
  };
  const data = questions.reduce(
    (acc, { rightAnswer, image }) => ({
      ...acc,
      rightAnswers: [...acc.rightAnswers, rightAnswer],
      paths: [...acc.paths, image],
    }),
    initialAccumulator,
  );
  return { ...data, humanAnswers, computerAnswers };
}
export default prepareDataForDetailsTable;
