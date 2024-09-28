/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) 
{
    let n = nums.length;
    if(n === 0)
        return 0;

    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let maxSum = dp[0];

    for(let i = 1; i < nums.length; i++)
    {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);

        maxSum = Math.max(dp[i], maxSum);
    }
    return maxSum;
};

/*

    let currentSum = nums[0];
    let maxSum = nums[0];

    for(let i = 1; i < nums.length; i++)
    {
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
*/