function SumOfNum(n){
    if(n==0)return 0;
    return n + SumOfNum(n - 1)
}

const result = SumOfNum(5)
console.log(result)