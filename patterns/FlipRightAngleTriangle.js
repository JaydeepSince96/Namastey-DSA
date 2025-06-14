function FlipRightAngleTriangle(n) {
  for (let i = n; i >= 1; i--) {  // Start from n, go down
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + j;
    }
    console.log(string);
  }
}
FlipRightAngleTriangle(5);
