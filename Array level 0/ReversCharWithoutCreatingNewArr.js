function ReversCharWithoutCreatingNewArr(nums) {
  let len = nums.length;
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    let temp = nums[i];
    nums[i] = nums[len - 1 - i];
    nums[len - 1 - i] = temp;
  }
  return nums;
}

const result = ReversCharWithoutCreatingNewArr(["h", "e", "l", "l", "o"]);
console.log(result);
