/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) 
{
    const n = nums.length;
    let answer = 0;
    const stack = [];

    // Find the sum of all the minimums.
    for (let right = 0; right <= n; ++right) 
    {
        while (stack.length > 0 && (right === n || nums[stack[stack.length - 1]] >= nums[right])) 
        {
            const mid = stack.pop();
            const left = stack.length === 0 ? -1 : stack[stack.length - 1];
            answer -= nums[mid] * (right - mid) * (mid - left);
        }
        stack.push(right);
    }

    // Find the sum of all the maximums.
    stack.length = 0; // Clear the stack for the next loop
    for (let right = 0; right <= n; ++right) 
    {
        while (stack.length > 0 && (right === n || nums[stack[stack.length - 1]] <= nums[right])) 
        {
            const mid = stack.pop();
            const left = stack.length === 0 ? -1 : stack[stack.length - 1];
            answer += nums[mid] * (right - mid) * (mid - left);
        }
        stack.push(right);
    }

    return answer;
};