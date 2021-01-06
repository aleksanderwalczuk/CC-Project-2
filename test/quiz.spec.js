import { getQuestion } from '../src/app/utils/quiz';

describe('Game process tests', () => {
  it('Should return empty object, if question scope is unset', () => {
    const expectedValue = { err: '' };
    const question = getQuestion();
    expect(question).toEqual(expectedValue);
  });
});
