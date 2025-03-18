/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) 
{
    let freq = new Map();
    for(let char of word)
        freq.set(char, (freq.get(char) || 0) + 1);

    let output = false;

    freq.forEach((value, key) => {
        const newMap = new Map(freq);
        if(value === 1)
            newMap.delete(key);
        else
            newMap.set(key, newMap.get(key) - 1);
        if(new Set([...newMap.values()]).size === 1)
            output = true;
    })
    return output;
};