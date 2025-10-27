function LengthOfLastWord(s){
    let n = s.length - 1;
    while(n>=0){
        if(s[n] === " " ){
            --n
        }else{
            break;
        }
    }
    let count = 0;
    while(n>=0){
        if(s[n] != " "){          
            --n
            ++count;
        }else{
            break;
        }
    }
    return count;
}

const result = LengthOfLastWord("Hello     Jaydeep  ")
console.log(result)


// concept :- At first we removed the empty spaces from start and end then we start counting the characters from last in this example we if there is any empty spaces we negatively counting the n (keep in mind It should go in negative indexes that's why we keep the the condition in while ) and increase the the count and as soon as it encountered the the empty space the break the loop and returen the count it will the count of Last word.