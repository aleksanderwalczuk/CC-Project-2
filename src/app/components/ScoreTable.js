import ef from '../utils/elementFactory';
import { getRanking } from '../logic/RankStore';

const ScoreTable = (mode) => {
  const rankList = getRanking(mode);

  const header = ef(
    'h3',
    { className: 'scores__header' },
    ef('img', {
      src: 'static/assets/ui/scoreTable.svg',
      className: 'scores__header-icon',
    }),
    'Mode Ranking',
  );

  // classes for cells
  const cellClass = 'scores__table-cell';
  const boldCellClass = `${cellClass} ${cellClass}--bold`;

  // generating cells with columns titles
  const columnTitles = ['Place', 'Player', 'Score'];
  const columnTitleCells = columnTitles.reduce((acc, title) => {
    acc.push(ef('p', { className: boldCellClass }, title));
    return acc;
  }, []);

  // generating cells with places, players and scores
  const places = ['1st', '2nd', '3rd'];
  const playersCells = rankList.reduce(
    (acc, { nickname, score }, index) => {
      acc.push(
        ef('p', { className: cellClass }, places[index]),
        ef('p', { className: cellClass }, nickname),
        ef('p', { className: cellClass }, `${score}`),
      );
      return acc;
    },
    [],
  );

  // generating table with generated before cells
  const table = ef(
    'div',
    { className: 'scores__table' },
    ...columnTitleCells,
    ...playersCells,
  );

  const scoreTableElement = ef(
    'div',
    { className: 'scores' },
    header,
    table,
  );

  return scoreTableElement;
};

export default ScoreTable;
