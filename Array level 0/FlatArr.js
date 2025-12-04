// [1,2,3,[4,5,[6,7,8]]] => [1,2,3,4,5,6,7,8]

const arr = [1,2,3,[4,5,[6,7,8]]]
function FlatArr(arr){
    let temp = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            temp.push(...FlatArr(arr[i]))
        }
        else{
            temp.push(arr[i])
        }
    }
    return temp
}

console.log(FlatArr(arr))