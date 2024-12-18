/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) 
{
    const productMap = new Map();
    const n = nums.length;

    // Step 1: Count pairs for each product
    for (let i = 0; i < n; i++) 
    {
        for (let j = i + 1; j < n; j++) 
        {
            const product = nums[i] * nums[j];
            productMap.set(product, (productMap.get(product) || 0) + 1);
        }
    }

    // Step 2: Calculate the number of tuples
    let count = 0;
    for (const freq of productMap.values()) 
    {
        if (freq > 1)
            count += (freq * (freq - 1)) / 2 * 8; // Combination * 8 tuples
    }

    return count;
};