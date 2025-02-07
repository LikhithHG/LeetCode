/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) 
{
    let zeroCount = 0;
    let longestWindow = 0;
    //Left pointer
    let left = 0;

    for(let right = 0; right < nums.length; right++)
    {
        zeroCount += nums[right] === 0 ? 1 : 0;

        //Shrink left until count of zero is less thank or equal to 1
        while(zeroCount > 1)
        {
            zeroCount -= (nums[left] === 0 ? 1 : 0);
            left++;
        }
        longestWindow = Math.max(longestWindow, right - left);
    }
    return longestWindow;
};