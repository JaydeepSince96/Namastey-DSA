const RightAngleTriangle = (num) => {
  for (let i = 0; i < num; i++) {
    let string = "";
    for (let j = 0; j < i + 1; j++) {
      string = string + "*";
    }
    console.log(string);
  }
};

RightAngleTriangle(4);
