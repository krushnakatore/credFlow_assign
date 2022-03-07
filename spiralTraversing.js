//Given a matrix of m x n elements, where m is the number of rows and n is the
//number of columns. Write a program to return all elements of the matrix in spiral
//order.

let arr = [
  [1, 2, 3],
  [5, 6, 7],
  [10, 9, 8],
  [7, 8, 9],
];

let N = arr.length;
let M = arr[0].length;

var traverse = "";
let top = 0;
let bottom = N - 1;
let right = M - 1;
let left = 0;
let count = 0;

while (count < N * M) {
  for (var r = top; r <= bottom && count < N * M; r++) {
    traverse = traverse + arr[r][left] + " ";
    count++;
  }
  left++;

  for (var r = left; r <= right && count < N * M; r++) {
    traverse = traverse + arr[bottom][r] + " ";
    count++;
  }
  bottom--;
  for (var r = bottom; r >= top && count < N * M; r--) {
    traverse = traverse + arr[r][right] + " ";
    count++;
  }
  right--;
  for (var r = right; r >= left && count < N * M; r--) {
    traverse = traverse + arr[top][r] + " ";
    count++;
  }
  top++;
}
console.log(traverse);
