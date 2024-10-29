/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) 
{
    nums.sort((a, b) => a - b);
    let max1 = nums[nums.length - 1];
    let max2 = nums[nums.length - 2];
    return (max1 - 1) * (max2 - 1);
};