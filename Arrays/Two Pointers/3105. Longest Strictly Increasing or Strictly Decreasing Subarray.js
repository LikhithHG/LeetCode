/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) 
{
    if (nums.length === 0) 
        return 0; // Edge case: empty array
    
    let maxLength = 1; // At least one element forms a subarray
    let incLength = 1; // Length of current strictly increasing subarray
    let decLength = 1; // Length of current strictly decreasing subarray

    for (let i = 1; i < nums.length; i++) 
    {
        if (nums[i] > nums[i - 1]) 
        { // Strictly increasing
            incLength++;
            decLength = 1; // Reset decreasing length
        } 
        else if (nums[i] < nums[i - 1]) 
        { // Strictly decreasing
            decLength++;
            incLength = 1; // Reset increasing length
        } 
        else 
        { // Neither increasing nor decreasing
            incLength = 1;
            decLength = 1;
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, incLength, decLength);
    }

    return maxLength;    
};