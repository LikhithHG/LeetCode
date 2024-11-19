/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) 
{
    //Sort the array
    nums.sort((a, b) => a - b);
    let moves = 0;

    for(let i = 1; i < nums.length; i++)
    {
        if(nums[i] <= nums[i - 1])
        {
            let diff = nums[i - 1] + 1 - nums[i];
            nums[i] = nums[i - 1] + 1;
            moves += diff;
        }
    }
    return moves;
};