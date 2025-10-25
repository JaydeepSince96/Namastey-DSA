function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;  // Base case: not found

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);   // Search left half
  } else {
    return binarySearch(arr, target, mid + 1, right);  // Search right half
  }
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2));  // -1


