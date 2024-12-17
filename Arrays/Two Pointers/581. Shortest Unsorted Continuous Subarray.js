/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) 
{
    let minimum = Infinity;
    let maximum = -Infinity;

    let flag = false;

    //When slope falls unsorted array starts so find the minimum till the last
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] < nums[i - 1])
            flag = true;
        if(flag)
            minimum = Math.min(minimum, nums[i]);
    }
    flag = false;
    //When slope increases unsorted array starts from the end so find the maximum till the begining
    for(let i = nums.length - 2; i >= 0; i--)
    {
        if(nums[i] > nums[i + 1])
            flag = true;
        if(flag)
            maximum = Math.max(maximum, nums[i]);
    }
    let l, r;

    for(l = 0; l < nums.length; l++)
    {
        if(minimum < nums[l])
            break;
    }
    for(r = nums.length - 1; r >= 0; r--)
    {
        if(maximum > nums[r])
            break;
    }

    return r - l < 0 ? 0 : r - l + 1;
};