/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) 
{
    const n = nums.length;
    let prefixSum = 0;
    // Map to store minimum prefix sum at each modulo position
    const minPrefixAtMod = new Map();
    // Initialize with 0 sum at index 0
    minPrefixAtMod.set(0, 0);
    let maxSum = -Infinity;
    
    for (let i = 0; i < n; i++) 
    {
        prefixSum += nums[i];
        // Current position mod k
        const mod = (i + 1) % k;
        
        // If we have a previous prefix sum at same mod position
        if (minPrefixAtMod.has(mod)) 
        {
            // Current subarray sum would be current prefix - minimum prefix at same mod
            maxSum = Math.max(maxSum, prefixSum - minPrefixAtMod.get(mod));
        }
        
        // Update minimum prefix sum at this mod position
        if (minPrefixAtMod.has(mod)) 
        {
            minPrefixAtMod.set(mod, Math.min(minPrefixAtMod.get(mod), prefixSum));
        } 
        else 
        {
            minPrefixAtMod.set(mod, prefixSum);
        }
    }
    
    return maxSum === -Infinity ? 0 : maxSum;
};