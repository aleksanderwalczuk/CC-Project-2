import gameModeName from '../src/app/components/GameModeName';
import '@testing-library/jest-dom/extend-expect';
import { PEOPLE } from '../src/app/constants';

test('Should return html element.', () => {
  const testedElement = gameModeName(PEOPLE);
  expect(testedElement).toBeInstanceOf(HTMLElement);
});
