/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) 
{
    let charCounts = new Array(26).fill(0);
    for (let c of s) 
        charCounts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    let maxCount = 0, letter = 0;
    for (let i = 0; i < charCounts.length; i++) 
    {
        if (charCounts[i] > maxCount) 
        {
            maxCount = charCounts[i];
            letter = i;
        }
    }

    if (maxCount > Math.floor((s.length + 1) / 2)) 
        return "";
        
    let ans = new Array(s.length);
    let index = 0;

    // Place the most frequent letter
    while (charCounts[letter] > 0) 
    {
        ans[index] = String.fromCharCode(letter + 'a'.charCodeAt(0));
        index += 2;
        charCounts[letter]--;
    }

    // Place the rest of the letters in any order
    for (let i = 0; i < charCounts.length; i++) 
    {
        while (charCounts[i] > 0) 
        {
            if (index >= s.length) 
                index = 1;
            ans[index] = String.fromCharCode(i + 'a'.charCodeAt(0));
            index += 2;
            charCounts[i]--;
        }
    }

    return ans.join('');
};