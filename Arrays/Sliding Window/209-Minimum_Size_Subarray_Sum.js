/*
https://www.youtube.com/watch?v=aYqYMIqZx5s
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) 
{
    let start = 0;
    let windowSum = 0;
    let minLength = Infinity;

    for (let end = 0; end < nums.length; end++) 
    {
        windowSum += nums[end];

        while (windowSum >= target) 
        {
            minLength = Math.min(minLength, end - start + 1);
            windowSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};