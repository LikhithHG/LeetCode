/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) 
{
    const n = nums.length;
    let ans = n;

    // Step 1: Remove duplicates
    const unique = [...new Set(nums)];

    // Step 2: Sort the unique numbers
    unique.sort((a, b) => a - b);

    // Step 3: Use sliding window
    let j = 0;
    for (let i = 0; i < unique.length; i++) 
    {
        // Move j to the furthest point where unique[j] < unique[i] + n
        while (j < unique.length && unique[j] < unique[i] + n) 
            j++;

        const count = j - i;
        ans = Math.min(ans, n - count);
    }

    return ans;    
};