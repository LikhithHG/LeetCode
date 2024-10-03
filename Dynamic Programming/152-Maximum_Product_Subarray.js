/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) 
{
    if(nums.length === 0)
        return 0;

    let max_dp = new Array(nums.length).fill(0);
    let min_dp = new Array(nums.length).fill(0);

    max_dp[0] = nums[0];
    min_dp[0] = nums[0];
    result = nums[0];

    for(let i = 1; i < nums.length; i++)
    {
        max_dp[i] = Math.max(nums[i], max_dp[i - 1] * nums[i], min_dp[i - 1] * nums[i]);
        min_dp[i] = Math.min(nums[i], max_dp[i - 1] * nums[i], min_dp[i - 1] * nums[i]);

        result = Math.max(result, max_dp[i]);
    }
    return result;
};