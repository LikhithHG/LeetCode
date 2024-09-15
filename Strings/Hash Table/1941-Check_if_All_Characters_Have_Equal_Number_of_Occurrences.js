/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) 
{
    let count = {};

    for(let char of s)
    {
        count[char] = (count[char] || 0) + 1;
    }    

    let freq = Object.values(count);

    return new Set(freq).size === 1;
};