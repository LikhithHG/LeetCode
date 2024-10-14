/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) 
{
    const map = {};
    const result = [];

    // Traverse each element in the array
    for (let i = 0; i < nums.length; i++) 
    {
        // If the number is already in the map, it's a duplicate
        if (map[nums[i]]) 
        {
            result.push(nums[i]);
        } 
        else 
        {
            // Mark the number as seen by adding it to the map
            map[nums[i]] = 1;
        }
    }

    return result;    
};

/*
const result = [];

    // Traverse each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Get the index corresponding to the value of the current element
        const index = Math.abs(nums[i]) - 1;
        
        // If the value at that index is negative, it means we've seen this number before
        if (nums[index] < 0) {
            result.push(Math.abs(nums[i])); // Add the duplicate to the result
        } else {
            // Mark the number as seen by negating the value at the index
            nums[index] = -nums[index];
        }
    }

    return result;
*/