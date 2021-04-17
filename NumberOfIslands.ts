/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid: number[][]) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        count += 1;
        callBFS(grid, i, j);
      }
    }
  }

  return count;
};

function callBFS(grid, i, j) {
  // check out bounders

  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] == 0
  )
    return;

  // mark the island you visited as 0
  grid[i][j] = 0;
  // search all it's bounders
  callBFS(grid, i + 1, j); // up
  callBFS(grid, i - 1, j); // down
  callBFS(grid, i, j - 1); // left
  callBFS(grid, i, j + 1); // right
}
