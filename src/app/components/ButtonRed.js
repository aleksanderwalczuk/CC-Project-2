export default function ButtonRed(text) {
  const isString = typeof text === 'string';
  if (!isString) {
    throw TypeError('Invalid data');
  }

  const hasCharacters = text.trim().length > 0;
  if (!hasCharacters) {
    throw new Error('Text is Empty');
  }

  const newButtonRed = document.createElement('button');
  newButtonRed.classList.add('button', 'button--red');
  newButtonRed.innerText = text;
  return newButtonRed;
}
