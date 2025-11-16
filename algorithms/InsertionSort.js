const sample = [7, 4, 3, 5, 1, 2];

function Insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let curr = arr[i];
    while ( arr[prev] >curr && prev >= 0) {
      arr[prev+1] = arr[prev];
      prev--
    }
    arr[prev + 1] = curr
  }
  return arr;
}

const result = Insert(sample);
console.log(result);
