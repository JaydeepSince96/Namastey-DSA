
function CountNumberOfDigits(num){
    if(num === 0) return 1
    let count =0;
    num = Math.abs(num)
    while(num>0){
        num = Math.floor(num/10);
        count++
    }
    return count
}

const result = CountNumberOfDigits(-1234)
console.log(result)




// function CountNumberOfDigits(num) {
//   let temp = [];
//   num.split("");
//   for (let i = 0; i < num.length; i++) {
//     temp.push(num[i]);
//   }
//   return temp.length;
// }

// const result = CountNumberOfDigits("123");
// console.log(result);
