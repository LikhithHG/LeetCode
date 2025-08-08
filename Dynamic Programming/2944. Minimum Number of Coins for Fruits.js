/**
 * @param {number[]} prices
 * @return {number}
 */
var minimumCoins = function(prices) 
{
    let n = prices.length;
    let dp = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
    dp[n] = 0;
    for (let i = n - 1; i >= 0; i--) 
    {
        let j = Math.min((i + 1) * 2, n);
        dp[i] = Math.min(...dp.slice(i + 1, j + 1).map(val => val || 0)) + prices[i];
    }
    return dp[0];
};