/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) 
{
     nums.sort((a, b) => a - b); // Sort the array in ascending order
    const seen = new Set();
    let left = 0, right = nums.length - 1;
    
    while (left < right) 
    {
        const avg = (nums[left] + nums[right]) / 2;
        seen.add(avg); // Add average to the set
        left++;
        right--;
    }
    
    return seen.size;    
};