/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) 
{
    // let n = cost.length;
    // if(n === 1)
    //     return cost[0];

    // let dp = new Array(n).fill(0);

    // dp[0] = cost[0];
    // dp[1] = cost[1];

    // for(let i = 2; i < n; i++)
    // {
    //     dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    // }
    // return Math.min(dp[n - 1], dp[n - 2]);

    let one  = 0;
    let two = 0;
    for(let i = 2; i < cost.length + 1; i++)
    {
        let temp = one;
        one = Math.min(one + cost[i - 1], two + cost[i - 2]);
        two = temp;
    }
    return one;
};