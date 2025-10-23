function SumOfAllEle(arr, i = arr.length - 1) {
  if (i < 0) return 0;
  return arr[i] + SumOfAllEle(arr, i - 1);
}

console.log(SumOfAllEle([1,2,3,4,5])); // 15
