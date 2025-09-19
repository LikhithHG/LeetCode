/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) 
{
      return sumArrayAtMost(nums, k) - sumArrayAtMost(nums, k - 1);
};

function sumArrayAtMost(nums, k)
{
    let freqMap = new Map();
    let left = 0;
    let totalCount = 0;

    for(let right = 0; right < nums.length; right++)
    {
        freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

        while(freqMap.size > k)
        {
            freqMap.set(nums[left], freqMap.get(nums[left]) - 1);
            if(freqMap.get(nums[left]) === 0)
                freqMap.delete(nums[left]);
            left += 1;
        }
        totalCount += right - left + 1;
    }  
    return totalCount;
}