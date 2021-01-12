export default function validateString(text) {
  const isString = typeof text === 'string';
  const hasCharacters = text.trim().length > 0;

  return !isString || !hasCharacters ? 0 : 1;
}
