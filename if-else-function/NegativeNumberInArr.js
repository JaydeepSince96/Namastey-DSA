const arr = [2,-9,17,0,1,-10,-4,8,-99,-33]

function NegativeNumberInArr(arr){
    let temp = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            temp.push(arr[i])
        }
    }
    return temp.length;
}

const result = NegativeNumberInArr(arr)
console.log(result)