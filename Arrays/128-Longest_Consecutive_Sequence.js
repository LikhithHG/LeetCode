/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) 
{
    if(nums.length === 0)
        return 0;

    nums.sort((a, b) => a - b);

    let max = 1;
    let window = 1;
    for(let i = 1; i < nums.length; i++)
    {
        if (nums[i - 1] !== nums[i])
        {
            if(nums[i] === nums[i - 1] + 1)
                window += 1;
            else
                window = 1;
        }
        max = Math.max(window, max);
    }
    return max;
};