const arr = [1,12,3,5,7,9,32]
const target = 3

function LinearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
}
const result = LinearSearch(arr,target)
console.log(result)