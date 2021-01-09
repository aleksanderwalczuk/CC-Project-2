import htmlElementCreator from '../../utils/htmlElementCreator';

function ModalDetailsTable(data1, data2) {
  const newTable = htmlElementCreator('table', {
    class: 'details__table',
  });
  return newTable;
}

export default ModalDetailsTable;