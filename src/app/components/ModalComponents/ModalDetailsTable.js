import htmlElementCreator from '../../utils/elementFactory';
import VisualImage from '../VisualImage';

function chooseStyleAndAnswer(round) {
  if (!round) {
    return ['', ''];
  }
  return round.isCorrect
    ? [round.answer, 'details__table__answer--correct']
    : [round.answer, 'details__table__answer--incorrect'];
}

function ModalDetailsTable(quiz, humanData, computerData) {
  console.log('adding details table')
  const tableHeaders = [null, 'You', 'Computer', 'Answer'];
  const newTable = htmlElementCreator('table', {
    className: 'details__table',
  });
  const tableHead = htmlElementCreator('thead');
  const tableHeadRow = htmlElementCreator('tr');
  tableHeaders.forEach((header) => {
    const tableHeader = htmlElementCreator(
      'th',
      {
        className: 'details__table__head',
      },
      // header,
    );
    tableHeadRow.appendChild(tableHeader);
  });

  // TABLE BODY
  const tableBody = htmlElementCreator('tbody', {
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
  // console.log(paths);
  // console.log(humanAnswers)
  // console.log(computerAnswers)
  // console.log(rightAnswers);
  // console.log(numberOfRows);

  rightAnswers.forEach((rightAnswer, index) => {
    const newRow = htmlElementCreator('tr');
    const [humanAnswer, humanStyle] = chooseStyleAndAnswer(
      humanAnswers[index],
    );
    const [computerAnswer, computerStyle] = chooseStyleAndAnswer(
      computerAnswers[index],
    );
    const newImageCell = htmlElementCreator('td', {
      className: 'details__table__image',
      // src: paths[index],
    });
    // const imageToInsert = VisualImage(paths[index]);
    // console.log(imageToInsert)
    // newImageCell.appendChild(imageToInsert);
    const newHumanAnswer = htmlElementCreator(
      'td',
      {
        className: humanStyle, //! !!!! className
      },
      humanAnswer,
    );
    const newComputerAnswer = htmlElementCreator(
      'td',
      {
        className: computerStyle,
      },
      computerAnswer,
    );
    const newCorrectAnswer = htmlElementCreator(
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
