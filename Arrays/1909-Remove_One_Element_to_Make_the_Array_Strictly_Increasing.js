/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) 
{
    let count = 0;

    for (let i = 1; i < nums.length; i++) 
    {
        if (nums[i] <= nums[i - 1]) 
        {
            count++;
            if (count > 1) 
                return false;
            // Check if removing nums[i] or nums[i - 1] can result in strictly increasing sequence
            if (i > 1 && nums[i] <= nums[i - 2] && nums[i + 1] <= nums[i - 1]) 
            {
                return false;
            }
        }
    }

    return true;   
};