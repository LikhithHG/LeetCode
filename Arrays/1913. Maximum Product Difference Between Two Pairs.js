/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) 
{
    nums.sort((a, b) => a - b);
    let maxProduct = nums[nums.length - 1] * nums[nums.length - 2];
    let minProduct = nums[0] * nums[1];
    return maxProduct - minProduct;
};