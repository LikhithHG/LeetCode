/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) 
{
    if(nums.length === 0)
        return 0;
    
    if(nums.length === 1)
        return nums[0];

    // let dp = new Array(nums.length).fill(0);

    // dp[0] = nums[0];
    // dp[1] = Math.max(nums[0], nums[1])
    let prev2 = 0; //dp[i - 2]
    let prev1 = nums[0]; // dp[i - 1]

    for(let i = 1; i < nums.length; i++)
    {
        //dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
        let current = Math.max(prev1, nums[i] + prev2);
        prev2 = prev1;
        prev1 = current;
    }

    //return dp[nums.length - 1];
    return prev1;
};