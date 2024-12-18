/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) 
{
    const n = nums.length;

    // Step 1: Determine the total number of distinct elements
    const distinctSet = new Set(nums);
    const totalDistinct = distinctSet.size;

    // Step 2: Initialize variables for sliding window
    let left = 0;
    let count = 0;
    const freqMap = new Map();

    // Step 3: Sliding window
    for (let right = 0; right < n; right++) 
    {
        // Add the current element to the frequency map
        freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

        // Check if the window contains all distinct elements
        while (freqMap.size === totalDistinct) 
        {
            // Add all subarrays ending at 'right'
            count += n - right;

            // Shrink the window from the left
            freqMap.set(nums[left], freqMap.get(nums[left]) - 1);
            if (freqMap.get(nums[left]) === 0) 
                freqMap.delete(nums[left]);
            
            left++;
        }
    }

    return count;    
};