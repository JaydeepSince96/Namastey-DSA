// What does inbuilt reduce function 
// Array.reduce((accumulator,currentVal, index, arr)=>{},initialVal)

// Here this[i] is current value
// i is for index and this is the array itself


Array.prototype.myReduce = function (cb,initialValue){
    let accumulator = initialValue
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i] // Here we checking what if user doesn't provide any initial value then What we have to do simply if user doen't provide then just return only first element of the array.
    }
    return accumulator;
}

const number = [1,2,3,4]

const reduceTheArr = number.myReduce((acc,cur)=>acc + cur, 0)
console.log(reduceTheArr)