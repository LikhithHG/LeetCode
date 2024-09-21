/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) 
{
    nums.sort((a, b) => a - b);
    let p1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    let p2 = nums[0] * nums[1] * nums[nums.length - 1];

    return Math.max(p1, p2);
};