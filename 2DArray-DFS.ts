function Traverse(matrix: number[][]) {
  let visited = new Set();
  DFS(visited, matrix, 0, 0);
  console.log(visited);
  return visited;
}

function DFS(visited, grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    visited.has(grid[i][j])
  )
    return;

  visited.add(grid[i][j]);
  DFS(visited, grid, i - 1, j); // up
  DFS(visited, grid, i, j + 1); // right
  DFS(visited, grid, i + 1, j); // bottom
  DFS(visited, grid, i, j - 1); // left
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
