import countScore from '../src/app/components/Modal/countScore';
import ModalWindow from '../src/app/components/Modal/ModalWindow';
import {
  game,
  humanPlayerGame,
  computerPlayerGame,
} from '../src/app/mockResponse';

describe('Modal Window Tests.', () => {
  describe('Given mock response', () => {
    const testedModal = ModalWindow(
      game,
      humanPlayerGame,
      computerPlayerGame,
    );
    it('should create HTML Div Element', () => {
      expect(testedModal).toBeInstanceOf(HTMLDivElement);
    });
  });
});

describe('Count Score Test', () => {
  describe('Given sample object with number of guessed and answered questions', () => {
    const testedScore = countScore(humanPlayerGame);
    it('should return correct score', () => {
      expect(testedScore).toEqual(3);
    });
  });
});

describe('Count Score Test', () => {
  describe('Given sample object with number of guessed and answered questions', () => {
    const testedScore = countScore(computerPlayerGame);
    it('should return correct score', () => {
      expect(testedScore).toEqual(-1);
    });
  });
});
