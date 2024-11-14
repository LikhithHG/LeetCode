/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) 
{
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    let maxPairSum = 0;
    let n = nums.length;
    
    // Step 2: Pair elements from both ends
    for (let i = 0; i < n / 2; i++) 
    {
        const pairSum = nums[i] + nums[n - 1 - i];
        maxPairSum = Math.max(maxPairSum, pairSum);  // Track the maximum pair sum
    }
    
    return maxPairSum;    
};