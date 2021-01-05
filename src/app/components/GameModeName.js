import validateString from '../utils/validateString';

export default function gameMode(message) {
  const isAValidString = validateString(message);
  if (!isAValidString) {
    throw new Error('Not a valid string');
  }

  const modeInfo = document.createElement('div');
  const heading = document.createElement('h2');
  const modeText = document.createElement('span');
  const question = document.createElement('span');

  modeInfo.id = 'mode-info';
  modeInfo.className = 'mode-info';

  heading.classList.add('mode-info__heading');

  modeText.classList.add('mode-info__text');
  modeText.innerText = 'mode: ';

  question.classList.add('mode-info__question');
  question.innerText = message;

  heading.append(modeText, question);
  modeInfo.append(heading);

  return modeInfo;
}
