/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) 
{
    let stack = [];
    let additionalCount = nums.length - k;

    for (let i = 0; i < nums.length; i++) 
    {
        //You're allowed to drop at most nums.length - k elements in total.
        //So, 1. while your stack is not empty, 
        //2. and the current element is smaller than the top of the stack, 
        //3. and you still have "drops" left, pop the top (i.e., remove larger element to make room for smaller one).
        while (stack.length > 0 && stack[stack.length - 1] > nums[i] && additionalCount > 0) 
        {
            stack.pop();
            additionalCount--;
        }
        stack.push(nums[i]);
    }

    // Return only the first `k` elements
    return stack.slice(0, k);    
};