/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) 
{
    let count = 0;
    for(let char of s)
    {
        if(char === letter)
            count += 1;
    }
    return Math.floor((count / s.length) * 100);
};