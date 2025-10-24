const arr = [1, 2, 3, 4, 5];

function SumOfOdd(n) {
  if (n < 0) return 0;
  const value = arr[n] % 2 !== 0 ? arr[n] : 0;
  return value + SumOfOdd(n - 1);
}

console.log(SumOfOdd(arr.length - 1)); // 9 (1 + 3 + 5)
