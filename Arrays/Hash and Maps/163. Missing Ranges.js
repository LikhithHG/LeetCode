/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) 
{
    let n = nums.length;
    //Initialize the array to find the missing range
    let missing = [];

    if(n === 0)
    {
        missing.push([lower, upper]);
        return missing;
    }
    
    //Edge case for the numbers missing between lower and the nums[0]
    if(lower < nums[0])
        missing.push([lower, nums[0] - 1]);
    
    //Iterate over the array to find the missing ranges
    for(let i = 0; i < n - 1; i++)
    {
        if(nums[i + 1] - nums[i] <= 1)
            continue;
        
        missing.push([nums[i] + 1, nums[i + 1] - 1]);
    }

    //Edge case for the Last range if number missing between nums[n - 1] and upper
    if(upper > nums[n - 1])
        missing.push([nums[n - 1] + 1, upper]);

    return missing;
};