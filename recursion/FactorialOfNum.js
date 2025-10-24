function Factorial(n){
    if(n ==0)return 1;
    return n*(Factorial(n-1))
}
const result = Factorial(5)
console.log(result)