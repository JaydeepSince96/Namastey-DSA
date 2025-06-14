function RightAngleRepeatedPattern(n) {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
        string = string + i
     
    }
    console.log(string)
  }
}

RightAngleRepeatedPattern(5)