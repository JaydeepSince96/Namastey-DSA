//  words = ["abc","bcd","aaaa","cbc"], x = "a"

function FindWordContainingChar(words, x){
    let index = []
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            index.push(i)
        }
    }
    return index;

}

let words = ["abc","bcd","aaaa","cbc"]
let x = "a"

const result = FindWordContainingChar(words, x)
console.log(result)