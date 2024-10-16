/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) 
{
    let sumIndex = new Map();
    sumIndex.set(0, -1);//sum is 0 at index -1
    let maxLen = 0;
    let runningSum = 0;

    for(let i = 0; i < nums.length; i++)
    {
        runningSum += nums[i] === 1 ? 1 : -1;

        if(sumIndex.has(runningSum))
            maxLen = Math.max(maxLen, i - sumIndex.get(runningSum));

        else
           sumIndex.set(runningSum, i); 
    }    
    return maxLen;
};