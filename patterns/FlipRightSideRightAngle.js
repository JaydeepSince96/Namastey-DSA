function FlipRightSideRightAngle(n) {
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n - (i + 1); j++) {
      string = string + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      string = string + "*";
    }
    console.log(string);
  }
}

FlipRightSideRightAngle(5);


// Second Method


// function FlipRightSideRightAngle(n) {
//     for (let i = 1; i <= n; i++) {
//         let string = " ".repeat(n - i);
//         for (let j = 1; j <= i; j++) {
//             string = string +'*';
//         }
//         console.log(string);
//     }
// }

// FlipRightSideRightAngle(5);

