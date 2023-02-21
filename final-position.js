const finalPosition = function (moves) {

  let currentPosition = [0, 0]

  for (let i = 0; i < moves.length; i++) {
    let currentMove = moves[i]

    if (currentMove == 'north') {
      currentPosition = [currentPosition[0], currentPosition[1] + 1];
    }
    if (currentMove == 'south') {
      currentPosition = [currentPosition[0], currentPosition[1] - 1];
    }
    if (currentMove == 'west') {
      currentPosition = [currentPosition[0] - 1, currentPosition[1]];
    }
    if (currentMove == 'east') {
      currentPosition = [currentPosition[0] + 1, currentPosition[1]];
    }
  }
  return currentPosition;
};

const movesAgain = ['south', 'east', 'east']
const moreMoves = ['west', 'north', 'north']
const moveList = ['north', 'west']
console.log(finalPosition(moveList))