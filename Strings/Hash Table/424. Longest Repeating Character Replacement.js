/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) 
{
    let start = 0;
    let frequencyMap = new Map();
    let maxFrequency = 0;
    let longestSubstringLength = 0;

    for (let end = 0; end < s.length; end++) 
    {
        const endChar = s[end];
        frequencyMap.set(endChar, (frequencyMap.get(endChar) || 0) + 1);

        // Update the max frequency seen so far
        maxFrequency = Math.max(maxFrequency, frequencyMap.get(endChar));

        // If the number of characters to change exceeds k, shrink the window
        while ((end - start + 1) - maxFrequency > k) 
        {
            const startChar = s[start];
            frequencyMap.set(startChar, frequencyMap.get(startChar) - 1);
            start++;
        }

        // Update the length of the longest valid substring
        longestSubstringLength = Math.max(longestSubstringLength, end - start + 1);
    }

    return longestSubstringLength;
};