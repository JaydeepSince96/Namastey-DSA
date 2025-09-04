// Polyfills are those when we try to simulate the inbuilt functin derivation in custom function.

// Array.map((num,i, arr)=>{})

Array.prototype.myMap = function(cb){
    let temp = []
    for(let i=0;i<this.length;i++){ // this, here because we want the array associated within evionment array.
        temp.push(cb(this[i],i,this))
    }
    return temp
}

const number = [1,2,3,4]

const multiplyByThree = number.myMap(ele => 3*ele)
console.log(multiplyByThree)