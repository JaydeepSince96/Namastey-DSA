// Such type of Question's pattern called Two pointer because for such question we are tracking indixes and maintain another variable to hold values for the comparison

// Concepta)- It is simple first we maintain a variable with 0 values, we iterate the items of array and if there is non zero number we shift the value of non zero number to nums[x] and then incremented the the variable. Once we shifted all the nonzero numbers to the left side of the array then  we can fill the rest indexs with zero



function MoveZeros(nums){
    let x =0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[x] = nums[i]
            x++;
        }
    }
    for(let i=x;i<nums.length;i++){
        nums[i] = 0
    }
    return nums
}
const result = MoveZeros([0,1,0,3,5,0,7])
console.log(result)