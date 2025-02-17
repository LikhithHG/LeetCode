/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) 
{
    // Create a 1D array to store the number of ways
    const dp = Array(n).fill(1);

    // Iterate over rows (excluding the first row)
    for (let i = 1; i < m; i++) 
    {
        for (let j = 1; j < n; j++) 
        {
            dp[j] += dp[j - 1];
        }
    }

    // The last element contains the result
    return dp[n - 1];
};

/*
function uniquePaths(m, n) 
{
    The problem is equivalent to finding the number of ways to arrange 𝑚−1 down moves and n−1 right moves in a sequence of m+n−2 moves.
    const factorial = (num) => {
        let result = 1;
        for (let i = 2; i <= num; i++) 
        {
            result *= i;
        }
        return result;
    };

    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
}
*/