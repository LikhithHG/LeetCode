/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) 
{
    let charCount = {};

    for(let char of s)
    {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for(let char in charCount)
    {
        if(charCount[char] % 2 === 0)
            length += charCount[char];
        
        else
        {
            length += charCount[char] - 1;
            hasOdd = true;
        }
    }
    if(hasOdd)
        length += 1;
    return length;
};