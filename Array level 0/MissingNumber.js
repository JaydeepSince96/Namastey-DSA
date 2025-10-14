function MissingNumber(nums){
let totalSum = nums.length * (nums.length + 1)/2
let partialSum = 0
for(let i=0;i<nums.length;i++){
    partialSum = partialSum + nums[i]
}
return totalSum - partialSum
}
const result = MissingNumber([1,3,2,4,5,6,0,8])
console.log(result)