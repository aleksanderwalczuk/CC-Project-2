import generateQuestion from '../src/app/logic/quiz';

describe('Game process tests', () => {
  it('Should return empty object, if question scope is unset', () => {
    const expectedValue = { err: 'modeOrDataError' };
    const question = generateQuestion();
    expect(question).toEqual(expectedValue);
  });
});
