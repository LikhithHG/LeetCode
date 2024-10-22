/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function(nums, k) 
{
    nums.sort((a, b) => a - b);
    let n = nums.length;

    let result = nums[n - 1] - nums[0];

    for(let i = 0; i < n - 1; i++)
    {
        let maxval = Math.max(nums[i] + k, nums[n - 1] - k);
        let minval = Math.min(nums[0] + k, nums[i + 1] - k);
        result = Math.min(result, maxval - minval);
    }
    return result;
};