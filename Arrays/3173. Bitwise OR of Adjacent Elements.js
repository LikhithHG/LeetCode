/**
 * @param {number[]} nums
 * @return {number[]}
 */
var orArray = function(nums) 
{
    const result = [];
    for (let i = 0; i < nums.length - 1; i++)
        result.push(nums[i] | nums[i + 1]);
    return result;    
};