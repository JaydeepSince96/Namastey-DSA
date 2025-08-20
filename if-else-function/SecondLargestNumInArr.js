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

const result1 = SecondLargestNumInArr(arr)
console.log(result)


// =============================== Second Solution ===========================================

function SecondLargestNum(num){
    let firstLargestNum = -Infinity
    let secondLargestNum = -Infinity
    for(let i=0;i<num.length;i++){
        if(num[i]> firstLargestNum){
            secondLargestNum = firstLargestNum
            firstLargestNum = num[i];
        }
    }
    return secondLargestNum;
}

const result2 = SecondLargestNum([1,23,15,55, 71, 89, 98124287])
console.log(result2)


// *** Concept
// We assume two vaules FirstLargestNum and SecondLargestNum at lowest value -Infinity so that we can assign greater values into it. but the question is how we do figureout the secondLargest ? 
// If we iterate elements and check the first Largest value Cann't the firstLargest first value doesn't become the second lagrgest value !!?