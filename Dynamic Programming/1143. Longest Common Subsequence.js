/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) 
{
    // Ensure text1 is the shorter string for space optimization
    if (text2.length < text1.length) 
        [text1, text2] = [text2, text1];

    // Initialize two arrays to store previous and current LCS values
    let previous = new Array(text1.length + 1).fill(0);
    let current = new Array(text1.length + 1).fill(0);

    // Iterate through text2 from last to first character
    for (let col = text2.length - 1; col >= 0; col--) 
    {
        for (let row = text1.length - 1; row >= 0; row--) 
        {
            if (text1[row] === text2[col])
                current[row] = 1 + previous[row + 1]; // Match case
            else 
                current[row] = Math.max(previous[row], current[row + 1]); // No match case
        }
        // Swap current and previous for the next iteration
        [previous, current] = [current, previous];
    }

    // The final answer is stored in previous[0]
    return previous[0];     
};