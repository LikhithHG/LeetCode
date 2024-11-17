/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) 
{
    const firstIndex = new Map();
    let maxLength = -1;

    for (let i = 0; i < s.length; i++) 
    {
        if (firstIndex.has(s[i]))
            // Calculate the length of the substring between the two equal characters
            maxLength = Math.max(maxLength, i - firstIndex.get(s[i]) - 1);
        else
            // Store the first occurrence of the character
            firstIndex.set(s[i], i);
    }

    return maxLength;
};