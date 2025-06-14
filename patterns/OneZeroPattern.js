function OneZeroPattern(n){
    for(let i=0;i<n;i++){
        let string = "";
        let toggle = 1;
        for(let j=0;j<=i;j++){
            string = string + toggle
            if(toggle == 1){
                toggle =0
            } else{
                toggle = 1;
            }
            
        }
        console.log(string)
    }
}

OneZeroPattern(5)