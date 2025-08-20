const arr = [7,1,5,3,6,4]

function findMinVal(nums){
 let min = arr[0]
 let maxProfit = 0
 for(let i=0;i<arr.length;i++){
     if(arr[i]-min > maxProfit){
         maxProfit = arr[i] - min
     }
     if(arr[i]<min){
         min = arr[i]
     }
 }
 return maxProfit
}

const result = findMinVal(arr)
console.log(result)

