function RightAngleNumbersPrint(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}
RightAngleNumbersPrint(5);
