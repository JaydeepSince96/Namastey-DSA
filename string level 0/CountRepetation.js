const str = "abcadeb";

function CountRepetation(str) {
    let occurance = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (occurance[char]) {
            occurance[char]++;
        } else {
            occurance[char] = 1;
        }
    }

    // Get characters which have exactly 2 occurrences, basically Object.keys() returns an array so we can apply the filter method and occurance[char] will provide the values of the keys and eventually the Object.keys will return the keys of the Object.
    const result = Object.keys(occurance).filter(char => occurance[char] === 2);

    return result.length > 0 ? result : "No characters with exactly 2 occurrences";
}

const result = CountRepetation(str);
console.log(result);
