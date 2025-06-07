function ElegibalToVote(age){
    if(age <= 0) return "Please Enter Human Age not for Alieans"
    if(age>=18){
        return "Elegibal To Vote"
    }
    return "Not Elegibal To Vote"
}

const result = ElegibalToVote(0)
console.log(result)