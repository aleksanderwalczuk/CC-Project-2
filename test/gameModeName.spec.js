import gameModeName from '../src/app/components/GameModeName';
import '@testing-library/jest-dom/extend-expect';

test('Should return html element.', () => {
  const testedElement = gameModeName('text');
  expect(testedElement).toBeInstanceOf(HTMLElement);
});
