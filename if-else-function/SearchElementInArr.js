let arr = [2,4,0,10,8,30]
let target = 399999

function SearchElementInArr(arr){
    if(arr.length === 0)return "It's Empty Array"
    for(let i=0;i<arr.length;i++){
        if(arr[i]=== target){
            return i;
        }
    }
    return -1
}

const result = SearchElementInArr(arr)
console.log(result)