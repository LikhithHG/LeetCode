/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) 
{
    let minDis = Infinity;

    for(i = 0; i < nums.length; i++)
    {
        if(nums[i] === target)
        {
            minDis = Math.min(minDis, Math.abs(i - start));
        }
    }
    return minDis;
};