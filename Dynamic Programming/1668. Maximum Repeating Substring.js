/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) 
{
    const n = sequence.length;
    const m = word.length;
    const dp = Array(n + 1).fill(0);

    // Iterate over the sequence, starting from the word's length
    for (let i = m; i <= n; i++) 
    {
        // Check if the substring of length m starting from index i is equal to the word
        if (sequence.substring(i - m, i) === word) 
            dp[i] = dp[i - m] + 1;
    }

    // Return the maximum dp value, which represents the maximum number of times the word can be repeated
    return Math.max(...dp);    
};