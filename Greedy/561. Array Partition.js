/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) 
{
    nums.sort((a, b) => a - b);  // Step 1: Sort the array in ascending order
    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) 
    {  
        // Step 2: Sum every second element (even indices)
        maxSum += nums[i];
    }
    return maxSum;
};