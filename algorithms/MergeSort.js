// Time complexcity is O(nlog2n)

const sample = [3,1,2,8] 
function Merge(left,right){
    let res = []
    let i=0
    let j = 0
    while(i< left.length && j< right.length ){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j),]
}

function MergeSort(arr){
    if(arr.length<=1)return arr
    let mid = Math.floor(arr.length/2)
    let left = MergeSort(arr.slice(0,mid))
    let right = MergeSort(arr.slice(mid))
    return Merge(left, right)
}

const result = MergeSort(sample)
console.log(result)