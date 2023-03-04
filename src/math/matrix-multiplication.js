/**
 * Matrix multiply
 */

function matrixMultiply(a, b) {
  let c = [];
  let n = a.length;
  let m = a[0].length;
  let k = b[0].length;

  for (let i = 0; i < n; i++) {
    c[i] = [];
    for (let j = 0; j < k; j++) {
      c[i][j] = 0;
      for (let k = 0; k < m; ++k) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return c;
}

const A = [
  [1, 2, 3],
  [3, 1, 2],
];
const B = [
  [1, 2],
  [3, 2],
  [1, 2],
];

const C = [
  [10, 12],
  [8, 12],
];

console.log(matrixMultiply(A, B));
console.log(JSON.stringify(matrixMultiply(A, B)) === JSON.stringify(C));
