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
  const tableHeaders = ['', 'You', 'Computer', 'Answer'];
  const newTable = elementFactory('table', {
    className: 'details__table',
  });
  const tableHead = elementFactory('thead');
  const tableHeadRow = elementFactory('tr');
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

  // TABLE BODY
  const tableBody = elementFactory('tbody', {
    className: 'details__table__body',
  });

  const humanAnswers = humanData.detailedAnswers;
  const computerAnswers = computerData.detailedAnswers;
  const { questions } = quiz;
  const rightAnswers = questions.reduce((listOfAnswers, question) => {
    listOfAnswers.push(question.rightAnswer);
    return listOfAnswers;
  }, []);
  const paths = questions.reduce((listOfAnswers, question) => {
    listOfAnswers.push(question.image);
    return listOfAnswers;
  }, []);

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
  newTable.append(tableHead, tableBody);
  tableHead.appendChild(tableHeadRow);
  return newTable;
}

export default ModalDetailsTable;
