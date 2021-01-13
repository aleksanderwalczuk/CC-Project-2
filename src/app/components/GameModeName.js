import ef from '../utils/elementFactory';
import validateString from '../utils/validateString';

function gameMode(message) {
  const isAValidString = validateString(message);
  if (!isAValidString) {
    throw new Error('Not a valid string');
  }

  const question = ef(
    'span',
    { className: 'mode-info__question' },
    message,
  );

  const modeText = ef(
    'span',
    { className: 'mode-info__text' },
    'mode: ',
  );

  const heading = ef(
    'h2',
    { className: 'mode-info__heading' },
    modeText,
    question,
  );

  const modeInfo = ef('div', { className: 'mode-info' }, heading);

  return modeInfo;
}

export default gameMode;
