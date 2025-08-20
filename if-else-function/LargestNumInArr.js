let arr = [5, 0, 1, 10, 8, 17, 1];

function LargestNumInArr(arr) {
  let largestNum = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    } 
  }
  return largestNum
}

const result = LargestNumInArr(arr)
console.log(result)


// First we assign smallest number is a Largest Number in Js, -Infinity is the smallest number and we compare it from other elements.