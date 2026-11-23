const players = [
  ["Ananya", 82],
  ["Rohan", 95],
  ["Vikram", 74],
];
const getLeaderboardSummary = function (players) {
  const [...standings] = players;
  let [[leaderName, first], [runnerName, second]] = players;
  if (first < second) {
    [leaderName, first, runnerName, second] = [
      runnerName,
      second,
      leaderName,
      first,
    ];
  }
  const leader = `${leaderName} ${first}`;
  const runnerUp = `${runnerName} ${second}`;
  return {leader, runnerUp, standings};
};

console.log(getLeaderboardSummary(players));
