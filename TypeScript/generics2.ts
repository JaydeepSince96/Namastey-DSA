// 1) In this concept we accepting two parameters in the function x, y but we don't know their type, In this case we can make generics like this.

// function Merge<T,U>(x:T,y:U): T & U{
//     return {...x, ...y}
// }


// 1) Same thing we can do in the arrow function like this.

// const Merge = <T,U>(x:T,y:U): T & U=>{
//     return {...x, ...y}
// }

// 2) When we use extend Keyword that means the Type should have include these properties. The extends keyword constrains the generic type to a specific shape or base type.

// function GetLength<T extends {length:number} >(value: T): number{
//     return value.length
// }

// getLength("Hello"); // ✅ string has length
// getLength([1, 2, 3]); // ✅ array has length
// getLength(123); // ❌ number has no length


// 2) This is how you can define the same in the arrow function.
const getLength = <T extends {len:number}>(value:T): number=>{
  return value.len
}