/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) 
{
    let n = nums.length;
    let left = 0;
    let currentPairs = 0;
    let answer = 0;
    const count = new Map();

    for(let right = 0; right < n; right++)
    {
        currentPairs += count.get(nums[right]) || 0;
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while(currentPairs >= k)
        {
            answer += n - right;
            count.set(nums[left], (count.get(nums[left])) - 1);
            currentPairs -= count.get(nums[left]);
            left += 1;
        }
    }    
    return answer;
};