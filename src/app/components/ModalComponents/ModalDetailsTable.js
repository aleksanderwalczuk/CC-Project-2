import elementFactory from '../../utils/elementFactory';
import prepareDataForDetailsTable from './prepareDataForDetailsTable'

function chooseStyleAndAnswer(round) {
  if (!round) {
    return ['', ''];
  }
  return round.isCorrect
    ? [round.answer, 'details__table__answer--correct']
    : [round.answer, 'details__table__answer--incorrect'];
}

function ModalDetailsTable(quiz, humanData, computerData) {
  const [
    humanAnswers,
    computerAnswers,
    rightAnswers,
    paths,
  ] = prepareDataForDetailsTable(quiz, humanData, computerData);

  const answersRows = rightAnswers.map((rightAnswer, index) => {
    const [humanAnswer, humanStyle] = chooseStyleAndAnswer(
      humanAnswers[index],
    );
    const [computerAnswer, computerStyle] = chooseStyleAndAnswer(
      computerAnswers[index],
    );
    const imageToInsert = elementFactory('img', {
      src: paths[index],
    });
    const newImageCell = elementFactory(
      'td',
      {
        className: 'details__table__image',
      },
      imageToInsert,
    );
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
    const newRow = elementFactory(
      'tr',
      {},
      newImageCell,
      newHumanAnswer,
      newComputerAnswer,
      newCorrectAnswer,
    );
    return newRow;
  });

  // TABLE BODY
  const tableBody = elementFactory(
    'tbody',
    {
      className: 'details__table__body',
    },
    ...answersRows,
  );

  // JOIN TOGETHER
  const tableHeaders = ['', 'You', 'Computer', 'Answer'];
  const tableHeadersElements = tableHeaders.map((header) => {
    const tableHeader = elementFactory(
      'th',
      {
        className: 'details__table__head',
      },
      header,
    );
    return tableHeader;
  });
  const tableHeadRow = elementFactory(
    'tr',
    {},
    ...tableHeadersElements,
  );

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
