/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) 
{
    let n = nums.length;
    let i = n - 2;

    while(i >= 0 && nums[i] >= nums[i + 1])
        i -= 1;
    
    if(i >= 0)
    {
        let j = n - 1;
        while(nums[j] <= nums[i])
            j -= 1;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1, n - 1);
    return nums;
};
function reverse(nums, start, end)
{
    while(start < end)
    {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start += 1;
        end -= 1;
    }
}