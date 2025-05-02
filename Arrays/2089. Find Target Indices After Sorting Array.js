/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) 
{
    // Step 1: Sort the array in non-decreasing order
    nums.sort((a, b) => a - b);

    // Step 2: Collect indices where the value equals the target
    let result = [];
    for (let i = 0; i < nums.length; i++) 
    {
        if (nums[i] === target) 
            result.push(i);
    }

    return result;
};