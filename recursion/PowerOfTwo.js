function PowerOfTwo(n){
    if(n==2) return true;
    else if(n%2 !==0 || (n<0)) return false;
    return PowerOfTwo(n/2)
}
const result = PowerOfTwo(16)
console.log(result)