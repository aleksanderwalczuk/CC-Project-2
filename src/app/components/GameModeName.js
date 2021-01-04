import validateString from '../utils/validateString';

export default function gameMode(message) {
  const isAValidString = validateString(message);
  if (!isAValidString) {
    throw new Error('Not a valid string');
  }

  const modeInfo = document.createElement('div');
  const modeTextElement = document.createElement('span');
  const questionElement = document.createElement('span');

  modeInfo.id = 'mode-info';
  modeInfo.className = 'mode-info';
  modeTextElement.className = 'mode-info__mode-text';
  modeTextElement.innerText = `mode: `;
  questionElement.className = 'mode-info__question';
  questionElement.innerText = `${message}`;
  modeInfo.append(modeTextElement, questionElement);
  return modeInfo;
}
