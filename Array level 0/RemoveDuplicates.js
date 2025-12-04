// ==============Sorted and non decreasing=====================
// Sorted and non decreasing values means It may have the duplicates like [1,2,2,3,6,6,5,7,8,8]

// ======================in place =============================
// Means you don't have to create a new array you have to make changes in existing array


function RemoveDuplicates(num){
    let x = 0
    for(let i=0;i<num.length;i++){ 
        if(num[i]>num[x]){  // If we have greater value than previouos then we shifted with pointer that way we escape the duplicate 
            x = x + 1;
            num[x] = num[i]
        }
    }
    return x + 1 // It will give you no of unique element in the array but if You want those elements then num.splice(0, x+1)
}

const result = RemoveDuplicates([0,0,1,1,4,4,4,4,7,7,9])
console.log(result)

// ****concept

// We are are iterating the the array and put a pointer x = 0 if it the indexes's value has more than the pointer index's value  than return the increased number of pointer and  + 1 because we have started with pointer value with zero 
