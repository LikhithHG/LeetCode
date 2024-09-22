/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) 
{
    let maxIndex = 0;

    //Index of maximum number
    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] > nums[maxIndex])
            maxIndex = i;
    }

    //Check if other numbers are grater than atleast twice of number in maxIndex
    for(let i = 0; i < nums.length; i++)
    {
        if(i !== maxIndex && nums[maxIndex] < 2 * nums[i])
            return -1;
    }

    return maxIndex;
};