/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) 
{
    // Map to store indices for each number
    const numIndices = new Map();
    
    // Collect all indices for each number
    for (let i = 0; i < nums.length; i++) 
    {
        if (!numIndices.has(nums[i]))
            numIndices.set(nums[i], []);
        numIndices.get(nums[i]).push(i);
    }
    
    const result = new Array(nums.length).fill(0);
    
    // Process each group of indices
    for (const indices of numIndices.values()) 
    {
        if (indices.length === 1) 
            continue; // Skip if number appears only once
        
        // Calculate prefix sums for optimization
        const prefixSum = new Array(indices.length + 1).fill(0);
        for (let i = 0; i < indices.length; i++)
            prefixSum[i + 1] = prefixSum[i] + indices[i];
        
        // Calculate sum of distances for each index
        for (let i = 0; i < indices.length; i++) 
        {
            // Left part: current index - each left index
            const leftSum = indices[i] * i - (prefixSum[i] - prefixSum[0]);
            
            // Right part: each right index - current index
            const rightSum = (prefixSum[indices.length] - prefixSum[i + 1]) - indices[i] * (indices.length - i - 1);
            
            // Store the total sum in result array
            result[indices[i]] = leftSum + rightSum;
        }
    }
    
    return result;    
};