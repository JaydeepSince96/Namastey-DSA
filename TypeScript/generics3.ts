// 1)- you can even give the Unions or and in the angle types T something like this.


// function PrintId<T extends number | string>(value:T):T{
//     return value
// }

// PrintId(123)
// PrintId("jkl")
// PrintId(true) // It will will error because booleans are not availabel in Types 

// 1)- In arrow function.

// const PrintId = <T extends number| string>(value:T): T=>{
//     return value
// }

//2) This is the most confusing one when constraints are extended by another Generic

// function GetProperty<T, K extends keyof T >(obj:T,key:K): T[K]{
//     return obj[key]
// }

// 3)  Default Generics

// function createBox<T = string>(value: T): T[] {
//   return [value];
// }

// createBox();        // uses default T = string → string[]
// createBox<number>(5); // explicitly T = number
