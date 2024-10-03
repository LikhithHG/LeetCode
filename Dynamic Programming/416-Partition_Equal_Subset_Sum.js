/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) 
{
    let totalSum = nums.reduce((a, b) => a + b, 0);

    if(totalSum % 2 === 1)
        return false;

    let target = totalSum / 2;

    let dp = new Array(target + 1).fill(false);
    dp[0] = true; // sum is zero

    for (let num of nums) 
    {
        // Iterate backward to prevent overwriting dp values needed for this iteration
        for (let j = target; j >= num; j--) 
        {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    // The answer is whether we can form a subset with a sum equal to target
    return dp[target];
};