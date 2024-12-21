/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) 
{
    let k = 0;
    for(const char of s)
    {
        if(char === c)
            k += 1;
    }   

    return (k * (k + 1)) / 2;
};