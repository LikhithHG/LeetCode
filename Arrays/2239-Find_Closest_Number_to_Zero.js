/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) 
{
    let closest = nums[0];

    for(let i = 1; i < nums.length; i++)
    {
        let num = nums[i];
        if(Math.abs(num) < Math.abs(closest) || (Math.abs(num) === Math.abs(closest) && num > closest))
            closest = num;
    }

    return closest;
};