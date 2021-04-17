function traverse(matrix: number[][]) {
  const visited = new Array(matrix.length).fill(
    new Array(matrix[0].length).fill(false)
  );
  let res = [];
  let queue = [[0, 0]];
  while (queue.length) {
    let [row, col] = queue.shift();
    if (visited[row][col]) continue;

    res.push(matrix[row][col]);
    visited[row][col] = true;

    let up = [row - 1, col];
    let right = [row, col + 1];
    let bottom = [row + 1, col];
    let left = [row, col - 1];

    if (matrix[row - 1][col]) queue.push(up);
    if (matrix[row][col + 1]) queue.push(right);
    if (matrix[row + 1][col]) queue.push(bottom);
    if (matrix[row][col - 1]) queue.push(left);
  }

  return res;
}
