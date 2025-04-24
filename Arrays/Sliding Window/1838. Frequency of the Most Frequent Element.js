/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) 
{
    nums.sort((a, b) => a - b);
    let left = 0;
    let current = 0;

    for(let right = 0; right < nums.length; right++)
    {
        let target = nums[right];
        current += target;

        if((right - left + 1) * target - current > k)
        {
            current -= nums[left];
            left++
        }
    }

    return nums.length - left;
};