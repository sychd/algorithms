/**
Binary search compares the target value to the middle element of the array:
- If the target value matches the element, its position in the array is returned.
- If the target value is less than the element, the search continues in the lower half of the array.
- If the target value is greater than the element, the search continues in the upper half of the array.
- If the search ends with the remaining half being empty, the target is not in the array.
By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.
 */

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const curr = Math.round((left + right) / 2);
    if (arr[curr] === value) {
      return curr;
    } else if (arr[curr] < value) {
      left = curr + 1;
    } else if (arr[curr] > value) {
      right = curr - 1;
    }
  }

  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 17, 18, 29, 32];
console.log(binarySearch(arr, 8));
console.log(binarySearch(arr, 17));
console.log(binarySearch(arr.slice(1), 17));
