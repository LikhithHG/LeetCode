/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) 
{
    let n = nums.length;
    let count = 0;
    let length = 0;

    for(let i = 0; i < n; i++)
    {
        if(i === 0 || nums[i] !== nums[i - 1])
            length += 1;
        
        else
            length = 1;
        
        count += length;
    }
    return count;
};