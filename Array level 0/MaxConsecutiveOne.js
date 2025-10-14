function MaxConsecutiveOne(nums){
 let currentVal = 0;
 let maxCount = 0;
 for(let i=0;i<nums.length;i++){
    if(nums[i] == 1){
        currentVal++
    }else{
        maxCount = Math.max(currentVal, maxCount)
        currentVal=0
    }
 }
 return Math.max(currentVal, maxCount)
}
const result = MaxConsecutiveOne([0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1])
console.log(result)