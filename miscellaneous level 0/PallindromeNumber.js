function Pallindrome(num) {
  let numCopy = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return numCopy === rev;
}

const result = Pallindrome(121);
console.log(result); // Should print true
