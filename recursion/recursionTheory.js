// Recursion:- Function calling itself to solve smaller version of the same problem

// Two Part of Recusion:-----

// BaseCase:- Stop Condition (When to stop calling itself)
// Recursive Case:- Part where function call itself

function Sum(n){
    if(n == -2)return; // Always make sure write base case on top like this.
    console.log(n) 
    n = n - 1 // Recursive Case
    Sum(n) // Recursive Case
}

Sum(5)