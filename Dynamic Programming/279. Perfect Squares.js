/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) 
{
    // Initialize the dp array where dp[i] is the minimum number of perfect squares that sum up to i
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    // Iterate through each number from 1 to n
    for (let i = 1; i <= n; i++) 
    {
        // Check every perfect square j*j that is less than or equal to i
        for (let j = 1; j * j <= i; j++) 
        {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    return dp[n];
};