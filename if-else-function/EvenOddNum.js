function IsEven(num){
    if(num === 0 || num < 0) return "Not a Valid Num"
    if(num%2===0){
        return "Even Num"
    }
    return "Odd Num"
}
const result = IsEven(0)
console.log(result)