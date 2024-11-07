/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) 
{
    let count = 0;
    let result = 0;
    let start = -1;
    let lastValid = -1;

    for(let i = 0; i < nums.length; i++)
    {
        const num = nums[i];
        if(num > right)
            start = i;
        if(num >= left && num <= right)
            lastValid = i;
        
        if(lastValid > start)
            count = lastValid - start;
        else
            count = 0;
        
        result += count;
    }
    return result;
};