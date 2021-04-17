function Traverse(matrix: number[][]) {
  let visited = new Array(matrix.length).fill(
    new Array(matrix[0].length).fill(false)
  );
  let res = [];
  DFS(visited, res, matrix, 0, 0);
  console.log(visited);
  return res;
}

function DFS(grid, i, j, visited, res) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    visited[i][j] === true
  )
    return;
  res.push(grid[i][j]);
  visited[i][j] = true;
  DFS(grid, i - 1, j, visited, res); // up
  DFS(grid, i, j + 1, visited, res); // right
  DFS(grid, i + 1, j, visited, res); // bottom
  DFS(grid, i, j - 1, visited, res); // left
}

function buildMatrix(row: number, col: number) {
  // build the grid
  let grid = [];
  let count = 1;
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j < col; j++) {
      row.push(count);
      count++;
    }

    grid.push(row);
  }

  return grid;
}
