/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) 
{
    let map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) 
    {
        let current = nums[i];
        let complement = k - current;

        if (map.get(complement) > 0) 
        {
            // Decrement the count of complement in the map
            map.set(complement, map.get(complement) - 1);
            count++;
        } 
        else 
        {
            // Add current element to the map
            map.set(current, (map.get(current) || 0) + 1);
        }
    }
    return count;
};

/*
var maxOperations = function(nums, k) 
{
    let count = 0;
    const freq = new Map();

    // Populate frequency map
    for (const num of nums) 
        freq.set(num, (freq.get(num) || 0) + 1);

    for (const [num, numCount] of freq) 
    {
        const complement = k - num;

        if (freq.has(complement)) 
        {
            if (num === complement) 
            {
                // Special case where num == complement
                count += Math.floor(numCount / 2);
            } 
            else 
            {
                // Regular case
                count += Math.min(numCount, freq.get(complement));
            }
            // Set frequencies to 0 to avoid double counting
            freq.set(num, 0);
            freq.set(complement, 0);
        }
    }

    return count;
};
*/