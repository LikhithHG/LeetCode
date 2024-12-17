/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) 
{
    let prefixSum = 0;
    let longestSubArray = 0;
    //Keeps prefix sum and the index at which it was seen
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++)
    {
        prefixSum += nums[i];

        if(prefixSum === k)
            longestSubArray = i + 1;
        
        if(hashMap.has(prefixSum - k))
            longestSubArray = Math.max(longestSubArray, i - hashMap.get(prefixSum - k));
        
        if(!hashMap.has(prefixSum))
            hashMap.set(prefixSum, i);
    }
    return longestSubArray;
};