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

// We inject the array inside the Object and check inside the iteration that if that element exist if exist then we increased the count of element otherwise we keep it as 1