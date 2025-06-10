let arr = [4,9,0,2,8,7,1]

// function SecondLargestNumInArr(arr){
//     return arr.sort((a,b)=>a-b).slice(arr.length-2, arr.length-1)
// }

function SecondLargestNumInArr(arr){
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
            
        }
        else if(arr[i]>secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

const result = SecondLargestNumInArr(arr)
console.log(result)
