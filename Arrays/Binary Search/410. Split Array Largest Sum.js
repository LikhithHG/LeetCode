/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) 
{
    // Helper function to determine how many subarrays are needed
    // if no subarray has a sum greater than maxSumAllowed
    function minimumSubarraysRequired(nums, maxSumAllowed) 
    {
        let currentSum = 0;
        let splitsRequired = 0;

        for (const element of nums) 
        {
            if (currentSum + element <= maxSumAllowed) 
                currentSum += element;
            else 
            {
                currentSum = element;
                splitsRequired++;
            }
        }

        return splitsRequired + 1;
    }

    // Binary search for the minimum largest sum
    let sum = 0;
    let maxElement = Number.MIN_SAFE_INTEGER;

    for (const element of nums) 
    {
        sum += element;
        maxElement = Math.max(maxElement, element);
    }

    let left = maxElement;
    let right = sum;
    let minimumLargestSplitSum = 0;

    while (left <= right) 
    {
        const maxSumAllowed = Math.floor(left + (right - left) / 2);

        if (minimumSubarraysRequired(nums, maxSumAllowed) <= k) 
        {
            minimumLargestSplitSum = maxSumAllowed;
            right = maxSumAllowed - 1;
        } 
        else 
            left = maxSumAllowed + 1;
    }

    return minimumLargestSplitSum;
};