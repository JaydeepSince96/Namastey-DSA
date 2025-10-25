function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {   // We need to put <= operator cause what if there is only one element and that is our target too.
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

const result = BinarySearch([-1, 0, 3, 5, 9, 12], 9);
console.log(result); // 4


// Such type of question where we need to shift left and right and mid frequently we can apply while loop because it will convinient.