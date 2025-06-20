function ReverseInteger(num) {
  let numCopy = num;
  let rev = 0;
  num = Math.abs(num);
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
    return (numCopy < 0) ? -rev : rev;
//   if (numCopy < 0) {
//     return -rev;
//   } else {
//     return rev;
//   }
}

const result = ReverseInteger(-4538768);
console.log(result);
