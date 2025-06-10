const arr = [3,2,4,5,8,12,9,1]

function EvenNumberInsideArray(arr){
    let temp = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            temp.push(arr[i])
        }
    }
    return temp;
}

const result = EvenNumberInsideArray(arr)
console.log(result)