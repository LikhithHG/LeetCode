/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function(nums) 
{
    let ans = 0;
    let stack = [];

    //Iterate the array
    for(let i = 0; i < nums.length; i++)
    {
        while(stack.length > 0 && nums[i] < nums[stack[stack.length - 1]])
            ans += i - stack.pop();
        stack.push(i); 
    }    
    //For the remaining elements
    while(stack.length > 0)
        ans += (nums.length - stack.pop());
    
    return ans;
};