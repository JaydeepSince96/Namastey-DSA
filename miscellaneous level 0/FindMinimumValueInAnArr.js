const arr = [7,1,5,3,6,4]

function findMinVal(nums){
    let minValIndex = 0
    let minVal = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]< arr[minValIndex]){
            minVal = arr[i]
            minValIndex++
        }
    }
    return minVal
}

const result = findMinVal(arr)
console.log(result)

// *** Concept 
// Maintain a variable for Minimum value of an Index and assume that would be lowest one and iterate the array and compare with that minimilist value of that index and in every iteration just increased that minimilist index so that in next iteration it will get increased the value. implortant things is here that maintain another variable for minimum value if the array's elements have smaller value then assign the array element's value in minVal.