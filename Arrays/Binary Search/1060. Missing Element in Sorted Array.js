/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) 
{
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while(left < right)
    {
        let mid = right - Math.floor((right - left) / 2);

        if(nums[mid] - nums[0] - mid < k)
            left = mid;
        else
            right = mid - 1;
    }    
    return nums[0] + k + left;
};