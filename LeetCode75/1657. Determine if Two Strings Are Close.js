/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) 
{
    // if (word1.length !== word2.length) 
    //     return false;

    // let word1Map = new Map();
    // let word2Map = new Map();

    // for (let c of word1) 
    //     word1Map.set(c, (word1Map.get(c) || 0) + 1);
    
    // for (let c of word2) 
    //     word2Map.set(c, (word2Map.get(c) || 0) + 1);

    // let word1Keys = [...word1Map.keys()].sort();
    // let word2Keys = [...word2Map.keys()].sort();

    // if (JSON.stringify(word1Keys) !== JSON.stringify(word2Keys)) 
    //     return false;

    // let word1Frequencies = [...word1Map.values()].sort((a, b) => a - b);
    // let word2Frequencies = [...word2Map.values()].sort((a, b) => a - b);

    // return JSON.stringify(word1Frequencies) === JSON.stringify(word2Frequencies);

    if (word1.length !== word2.length) 
        return false;

    let word1Map = new Array(26).fill(0);
    let word2Map = new Array(26).fill(0);
    let word1Bit = 0;
    let word2Bit = 0;

    for (let c of word1) 
    {
        word1Map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        word1Bit |= (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)));
    }

    for (let c of word2) 
    {
        word2Map[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        word2Bit |= (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)));
    }

    if (word1Bit !== word2Bit) 
        return false;

    word1Map.sort((a, b) => a - b);
    word2Map.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) 
    {
        if (word1Map[i] !== word2Map[i]) 
            return false;
    }

    return true;
};