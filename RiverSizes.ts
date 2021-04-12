function riverSize(matrix) {
  let rivers = [];
  let riverLen = 0;
  // rows
  for (let i = 0; i < matrix.length; i++) {
    // cols
    for (let j = 0; j < matrix[0].length; j++) {
      if (checkNeigbers(matrix, i, j, riverLen)) {
        rivers.push(riverLen);
      }
    }
  }
}

function checkNeigbers(matrix, i, j, riverLen) {
  if (
    matrix[i][j] == 0 ||
    i < 0 ||
    j < 0 ||
    i > matrix.length ||
    j > matrix[i].length
  )
    return riverLen;
  matrix[i][j] = 0;
  riverLen++;
  checkNeigbers(matrix, i, j + 1, riverLen); // right
  checkNeigbers(matrix, i, j - 1, riverLen); // left
  checkNeigbers(matrix, i + 1, j, riverLen); // bottom
  checkNeigbers(matrix, i - 1, j, riverLen); // top
}
