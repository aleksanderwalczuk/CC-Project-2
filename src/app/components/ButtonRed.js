import validateString from '../utils/validateString';

export default function ButtonRed(text) {
  const isAValidString = validateString(text);
  if (!isAValidString) {
    throw new Error('Not a valid string');
  }

  const newButtonRed = document.createElement('button');
  newButtonRed.classList.add('button', 'button--red');
  newButtonRed.innerText = text;
  return newButtonRed;
}
