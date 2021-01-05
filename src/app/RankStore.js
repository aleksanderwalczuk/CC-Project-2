const maxRankingSize = 3;

export const getRanking = (mode) =>
  JSON.parse(localStorage.getItem(mode)) || [];

export const rankPlayer = (nickname, score, mode) => {
  const currentRanking = getRanking(mode);
  const newRanking = [...currentRanking, { nickname, score }]
    .sort((a, b) => b.score - a.score)
    .slice(0, maxRankingSize);
  localStorage.setItem(mode, JSON.stringify(newRanking));
};
