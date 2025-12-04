//Pro tips:- Whenever you have to count something or count repeatation always use Hash Map

function MaxFrequency(str){
let map = {}
for(let i=0;i<str.length;i++){
    if(!map[str[i]]){
        map[str[i]] = 1
    }else{
        ++map[str[i]]
    }
}
let maxVovel = 0
let maxConsonent = 0
let vovel = ["a","e","i","o","u"]

for(let i=0;i<str.length;i++){
    if(vovel.includes(str[i])){
        if(map[str[i]]>maxVovel){
            maxVovel = map[str[i]]
        }
    }else{
        if(map[str[i]]>maxConsonent){
            maxConsonent = map[str[i]]
        }
    }
}
return maxConsonent + maxVovel
}

const result = MaxFrequency("success")
console.log(result)