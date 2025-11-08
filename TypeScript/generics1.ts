// 1) This is the classical way of defining function and their return type

// function SimpleTypedFunction(num:number):number{
//     return num
// }


// 1) This is how you can describe it in arrow function.

// const SimpleTypedFun = (num:number): number=>{
//     return num
// }


// 2) You actually don't know what would be the type of the parameters and the type of return in that case you define something like this.
//KeyPoints:- Always define angle bracket of types after the function name


// function Identity<T>(value:T):T{
//  return value
// }

// 2) Same thing you have to define like this in the arrow function.
// KeyPoint:- Always give the angle bracket of Types after the eqalto sign.

// const Identity = <T>(value:T): T=>{
//     return value
// }
// const num = Identity(8)