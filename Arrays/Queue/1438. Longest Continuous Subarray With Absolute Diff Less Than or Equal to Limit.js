/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) 
{
    let maxDeque = [];
    let minDeque = [];
    let maxLength = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++)
    {
        //Maintain the order of the max dequeue - decreasing order
        while(maxDeque.length && maxDeque[maxDeque.length - 1] < nums[right])
            maxDeque.pop();
        maxDeque.push(nums[right]);

        //Maintain the order of the min dequeue - increasing order
        while(minDeque.length && minDeque[minDeque.length - 1] > nums[right])
            minDeque.pop();
        minDeque.push(nums[right]);

        //Check if the current window exceeds the limit
        while(maxDeque[0] - minDeque[0] > limit)
        {
            if(maxDeque[0] === nums[left])
                maxDeque.shift();
            if(minDeque[0] === nums[left])
                minDeque.shift();
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};