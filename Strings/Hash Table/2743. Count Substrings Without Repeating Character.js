/**
 * @param {string} s
 * @return {number}
 */
var numberOfSpecialSubstrings = function(s) 
{
    let count = 0;
    let start = 0;
    const freq = new Array(26).fill(0);
    for (let end = 0; end < s.length; end++) 
    {
        const endCharIndex = s.charCodeAt(end) - 'a'.charCodeAt(0);
        freq[endCharIndex]++;
        while (freq[endCharIndex] > 1) 
        {
            const startCharIndex = s.charCodeAt(start) - 'a'.charCodeAt(0);
            freq[startCharIndex]--;
            start++;
        }

        count += (end - start + 1);
    }
    return count;
};