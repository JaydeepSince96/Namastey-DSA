const arr = [2, 5, 8, 9, 4, 2, 5];
const RepeatElements = (arr) => {
  let occurance = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (occurance[char]) {
      occurance[char]++;
    } else {
      occurance[char] = 1;
    }
  }
  let result = Object.keys(occurance).filter((char) => occurance[char] === 2);
  return result.length > 0
    ? result
    : "No characters with exactly 2 occurrences";
};
const result = RepeatElements(arr);
console.log(result);
