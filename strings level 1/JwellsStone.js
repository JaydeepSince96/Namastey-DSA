
const jwell = "aA"
const stone = "aAAbbbb"
function JwellStone(str1,str2){
    let occurance = new Set()
    for(let i=0;i<str1.length;i++){
        occurance.add(str1[i])
    }
    let count = 0
    for(let i=0; i<str2.length; i++){
        if(occurance.has(str2[i])){
            ++count
        }
    }
    return count;
}

const result = JwellStone(jwell, stone)
console.log(result)