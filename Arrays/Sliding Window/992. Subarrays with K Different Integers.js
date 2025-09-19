/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) 
{
    let distinct_count = Array(nums.length + 1).fill(0);
    let left = 0, right = 0;
    let current_count = 0, total_count = 0;

    while(right < nums.length)
    {
        distinct_count[nums[right]] += 1;

        if(distinct_count[nums[right]] === 1)
            k -= 1;

        if(k < 0)
        {
            distinct_count[nums[left]] -= 1;
            if(distinct_count[nums[left]] === 0)
                k += 1;
            left += 1;
            current_count = 0;
        }

        if(k === 0)
        {
            while(distinct_count[nums[left]] > 1)
            {
                distinct_count[nums[left]] -= 1;
                left += 1;
                current_count += 1;
            }
            total_count += current_count + 1;
        }
        right += 1;
    }
    return total_count;
};
/*
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

*/