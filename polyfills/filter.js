Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {   // Here we should check if we have do any comparison on behalf of that it will return value
      temp.push(this[i]);
    }
  }
  return temp;
};

const number = [1, 2, 3, 4];

const greaterThanOne = number.myFilter((ele) => ele > 2);
console.log(greaterThanOne);


// *** here this[i] represents the element and, i represent the index and, this represents the array itself.