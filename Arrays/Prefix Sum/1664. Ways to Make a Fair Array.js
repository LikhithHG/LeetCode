/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) 
{
    const n = nums.length;
    const evenPrefix = new Array(n + 1).fill(0);
    const oddPrefix = new Array(n + 1).fill(0);

    // Build prefix sums
    for (let i = 0; i < n; i++) 
    {
        evenPrefix[i + 1] = evenPrefix[i];
        oddPrefix[i + 1] = oddPrefix[i];
        if (i % 2 === 0) 
            evenPrefix[i + 1] += nums[i];
        else 
            oddPrefix[i + 1] += nums[i];
    }

    let count = 0;

    // Try removing each index and check fairness
    for (let i = 0; i < n; i++) 
    {
        // Sum before index i stays the same
        const evenBefore = evenPrefix[i];
        const oddBefore = oddPrefix[i];

        // Sum after index i flips parity
        const evenAfter = oddPrefix[n] - oddPrefix[i + 1];
        const oddAfter = evenPrefix[n] - evenPrefix[i + 1];

        const evenSum = evenBefore + evenAfter;
        const oddSum = oddBefore + oddAfter;

        if (evenSum === oddSum) 
            count++;
    }

    return count;    
};