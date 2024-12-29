/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, k) 
{
    // Create a Map to store frequency counts
    const count = new Map();
    let maxFreq = 0;
    
    // Count frequency of each number and track the maximum frequency
    //Each group of duplicate elements must be able to start a new subsequence
    //If we have a number that appears max_freq times, we'll need at least max_freq different subsequences because the same number can't appear in the same subsequence (it wouldn't be strictly increasing).
    //Each subsequence needs to be at least length k.
    //Therefore, we need at least max_freq * k positions in total to create valid subsequences.
    //If max_freq * k > len(nums), it's impossible to create valid subsequences because we don't have enough positions.
    for (const num of nums) 
    {
        count.set(num, (count.get(num) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(num));
    }
    
    // Check if it's possible to create required subsequences
    return maxFreq * k <= nums.length;    
};