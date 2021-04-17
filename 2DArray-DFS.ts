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
}
