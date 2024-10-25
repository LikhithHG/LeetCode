/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) 
{
    // Frequency map to count occurrences of each remainder
    const remainderCount = new Map();
    
    // Step 1: Count remainders
    for (const num of arr) 
    {
        // Compute remainder, ensure it's positive using (num % k + k) % k
        const remainder = ((num % k) + k) % k;
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    
    // Step 2: Check pairing conditions
    for (const [rem, count] of remainderCount) 
    {
        if (rem === 0) 
        {
            // For remainder 0, the count must be even
            if (count % 2 !== 0) 
            {
                return false;
            }
        } 
        else 
        {
            // For other remainders, check the complementary count
            const complementCount = remainderCount.get(k - rem) || 0;
            if (count !== complementCount) 
            {
                return false;
            }
        }
    }
    
    return true;
};