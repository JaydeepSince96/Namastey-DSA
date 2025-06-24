function RepeatedCharCount(input) {
  const occurance = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    console.log(char, "char")

    if (occurance[char]) {
      occurance[char]++;
    } else {
      occurance[char] = 1;
    }
  }

  return occurance;
}

console.log(RepeatedCharCount("strabct")); // Output: { s: 1, t: 2, r: 1, a: 1, b: 1, c: 1 }
