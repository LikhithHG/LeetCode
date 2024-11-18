/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) 
{
    let n = nums.length;

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
            nums[j] = (nums[j] + nums[j + 1]) % 10;
    }
    return nums[0];
};