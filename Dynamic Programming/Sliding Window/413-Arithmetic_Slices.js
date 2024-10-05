/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) 
{
    let n = nums.length;
    if(n < 3)
        return 0;

    let count = 0;
    let currentCount = 0;

    for(let i = 2; i < n; i++)
    {
        if(nums[i - 1] - nums[i - 2] === nums[i] - nums[i - 1])
        {
            currentCount += 1;
            count += currentCount;
        }
        else
            currentCount = 0;
    }
    return count;
};