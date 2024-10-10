/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) 
{
    let frequency = new Map();

    for(let char of s)
    {
        frequency.set(char, (frequency.get(char) || 0 ) + 1);
    }

    for(let char of t)
    {
        if(!frequency.has(char) || frequency.get(char) === 0)
            return char;
        else
            frequency.set(char, frequency.get(char) - 1);
    }
};

/*
var findTheDifference = function(s, t) {
  let result = 0;

    // XOR all characters in both s and t
    for (let char of s + t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);  
};
*/