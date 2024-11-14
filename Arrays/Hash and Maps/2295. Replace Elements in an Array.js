/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) 
{
    // Map to keep track of the index of each element in `nums`
    const indexMap = {};
    for (let i = 0; i < nums.length; i++)
        indexMap[nums[i]] = i;

    // Apply each replacement operation
    for (const [target, newValue] of operations) 
    {
        const index = indexMap[target];  // Find the index of `target`
        nums[index] = newValue;          // Replace `target` with `newValue` in `nums`
        
        // Update the map with the new value
        delete indexMap[target];
        indexMap[newValue] = index;
    }

    return nums;    
};