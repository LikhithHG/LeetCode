/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) 
{
    //push the first array to result
    let result = nums[0];

    for(let i = 1; i < nums.length; i++)
    {
        result = result.filter(num => nums[i].includes(num));
    }

    return result.sort((a, b) => a - b);
};