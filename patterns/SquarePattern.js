function SquarePattern(num) {
  for (let i = 0; i < num; i++) {
    let pattern = "";
    for (let j = 0; j < num; j++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

SquarePattern(4);
