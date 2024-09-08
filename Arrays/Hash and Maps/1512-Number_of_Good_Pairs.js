/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) 
{
    let count = 0;
    let freq = {};

    for (let num of nums) 
    {
        if (freq[num]) 
        {
            count += freq[num];  // Add the number of good pairs for this number
            freq[num]++;         // Increment the frequency of this number
        } 
        else 
        {
            freq[num] = 1;       // Initialize frequency of the number
        }
    }

    return count;
};