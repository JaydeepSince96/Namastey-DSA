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

// *** Concept
// How do you get last digit ? ===========> num%2 this will give you remainder and it will became last digit.
// How would we remove the last digit from the number =================> num / 10  this will remove the last digit
// rev * 10 + rem; this will add the next digit
