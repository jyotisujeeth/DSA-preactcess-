/*
Unique Paths 
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/
 var uniquePathsWithObstacles = function (obstacleGrid) {
  const M = obstacleGrid.length;
  const N = obstacleGrid[0].length;
  const memo = new Array(M).fill(0).map((v) => new Array(N).fill(0)); // 1-memo Array to Cache the Result

  const traverse = (x, y) => {
    if (obstacleGrid[x] === undefined || obstacleGrid[x][y] === undefined || obstacleGrid[x][y] === 1) return 0; // 2-check is there is Obstacle

    if (x === M - 1 && y === N - 1) return 1; // 3-if we reach the Target we need

    if (memo[x][y] === 0) { // 4-start to traverse at this point if === 0
      memo[x][y] = traverse(x + 1, y) + traverse(x, y + 1);
    }
    return memo[x][y]; // 5-Return the result
  };

  return traverse(0, 0);
};
