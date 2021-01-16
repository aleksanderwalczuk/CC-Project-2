import elementFactory from '../../utils/elementFactory';

function chooseStyleAndAnswer(round) {
  if (!round) {
    return ['', ''];
  }
  return round.isCorrect
    ? [round.answer, 'details__table__answer--correct']
    : [round.answer, 'details__table__answer--incorrect'];
}

function ModalDetailsTable(quiz, humanData, computerData) {
  // TABLE BODY
  const tableBody = elementFactory('tbody', {
    className: 'details__table__body',
  });

  const humanAnswers = humanData.detailedAnswers;
  const computerAnswers = computerData.detailedAnswers;
  const { questions } = quiz;
  const rightAnswers = questions.map(
    (question) => question.rightAnswer,
  );
  const paths = questions.map((question) => question.image);

  rightAnswers.forEach((rightAnswer, index) => {
    const newRow = elementFactory('tr');
    const [humanAnswer, humanStyle] = chooseStyleAndAnswer(
      humanAnswers[index],
    );
    const [computerAnswer, computerStyle] = chooseStyleAndAnswer(
      computerAnswers[index],
    );
    const newImageCell = elementFactory('td', {
      className: 'details__table__image',
    });
    const imageToInsert = elementFactory('img', {
      src: paths[index],
    });
    newImageCell.appendChild(imageToInsert);
    const newHumanAnswer = elementFactory(
      'td',
      humanStyle === '' ? {} : { className: humanStyle },
      humanAnswer,
    );
    const newComputerAnswer = elementFactory(
      'td',
      computerStyle === '' ? {} : { className: computerStyle },
      computerAnswer,
    );
    const newCorrectAnswer = elementFactory(
      'td',
      {
        className: 'details__table__answer',
      },
      rightAnswer,
    );
    newRow.append(
      newImageCell,
      newHumanAnswer,
      newComputerAnswer,
      newCorrectAnswer,
    );
    tableBody.appendChild(newRow);
  });

  // JOIN TOGETHER

  const tableHeadRow = elementFactory('tr');
  const tableHeaders = ['', 'You', 'Computer', 'Answer'];
  tableHeaders.forEach((header) => {
    const tableHeader = elementFactory(
      'th',
      {
        className: 'details__table__head',
      },
      header,
    );
    tableHeadRow.appendChild(tableHeader);
  });
  const tableHead = elementFactory('thead', {}, tableHeadRow);
  const newTable = elementFactory(
    'table',
    {
      className: 'details__table',
    },
    tableHead,
    tableBody,
  );

  return newTable;
}

export default ModalDetailsTable;
