import { getRanking, rankPlayer } from '../src/app/RankStore';

describe('RankStore test', () => {
  const mode = 'people';
  afterEach(() => localStorage.clear());

  describe('Given an empty ranking', () => {
    describe('When getting the ranking', () => {
      it('Then the correct ranking is returned', () => {
        const ranking = getRanking(mode);
        expect(ranking).toEqual([]);
      });
    });

    describe('When ranking a player', () => {
      const playerToRank = { nickname: 'Ola', score: 30 };
      it("Then player's score is in the ranking", () => {
        rankPlayer(playerToRank.nickname, playerToRank.score, mode);
        expect(localStorage.getItem(mode)).toBe(
          JSON.stringify([playerToRank]),
        );
      });
    });
  });

  describe('Given a ranking with 3 entries', () => {
    const first = { nickname: 'First', score: 80 };
    const second = { nickname: 'Second', score: 60 };
    const third = { nickname: 'Third', score: 30 };
    const ranking = [first, second, third];

    beforeEach(() =>
      localStorage.setItem('people', JSON.stringify(ranking)),
    );

    describe('When getting the ranking', () => {
      it('Then the correct ranking is returned', () => {
        expect(getRanking(mode)).toEqual(ranking);
      });
    });

    describe('When ranking a player with score worse than the 3rd player', () => {
      const playerToRank = { nickname: 'Ola', score: 10 };
      it('Then ranking remains unchanged', () => {
        rankPlayer(playerToRank.nickname, playerToRank.score, mode);
        expect(localStorage.getItem(mode)).toBe(
          JSON.stringify(ranking),
        );
      });
    });

    describe('When ranking a player with the new highest score', () => {
      const playerToRank = { nickname: 'Fasola', score: 100 };
      it('Then the player is on the top of the ranking', () => {
        rankPlayer(playerToRank.nickname, playerToRank.score, mode);
        expect(localStorage.getItem(mode)).toBe(
          JSON.stringify([playerToRank, first, second]),
        );
      });
    });
  });
});
