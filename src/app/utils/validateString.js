export default function validateString(text) {
  const isString = typeof text === 'string';
  if (!isString) {
    throw TypeError('Invalid data');
  }

  const hasCharacters = text.trim().length > 0;
  if (!hasCharacters) {
    throw new Error('Text is Empty');
  }

  return true;
}
