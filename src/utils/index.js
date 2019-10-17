export const idCreator = () =>
  Math.random()
    .toString(36)
    .substr(2, 9);

export const API_URL = "https://api.foursquare.com/v2/venues/explore?";

export const countVotes = participants => {
  const pTable = {
    0: 0,
    1: 0,
    2: 0
  };
  let maxNum = 0;
  let most = null;
  for (let p in participants) {
    const { choice } = participants[p];
    if (choice !== null) {
      pTable[choice] = pTable[choice] + 1;
      if (pTable[choice] === maxNum) {
        most = null;
      }
      if (pTable[choice] > maxNum) {
        maxNum = pTable[choice];
        most = choice;
      }
    }
  }
  return most;
};
