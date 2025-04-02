/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) 
{
    let n = nums.length;
    let total = 0;
    let prefixSum = Array(n + 1).fill(0);

    for(let i = 0; i < n; i++)
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    
    for(let i = 0; i < n; i++)
    {
        let start = Math.max(0, i - nums[i]);
        total += prefixSum[i + 1] - prefixSum[start];
    }

    return total;
};