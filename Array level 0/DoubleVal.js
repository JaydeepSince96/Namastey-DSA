const obj = {
    a: 10,
    b: 20,
    c: "Hello world"
}

function DoubleVal(obj){
    for(let x in obj){
        if(typeof obj[x] === 'number'){
            obj[x] = 2* obj[x]
        }
    }
    return obj
}
console.log(DoubleVal(obj))