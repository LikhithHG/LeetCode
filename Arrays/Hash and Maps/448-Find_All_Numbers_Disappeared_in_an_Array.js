/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) 
{
    let numSet = new Set(nums);
    let result = [];

    for(let i = 1; i <= nums.length; i++)
    {
        if(!numSet.has(i))
            result.push(i);
    }
    return result;
};