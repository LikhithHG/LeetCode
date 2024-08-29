/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) 
{
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length).fill(0);
    let p = nums.length - 1;

    while(left <= right)
    {
        if(Math.abs(nums[left]) < Math.abs(nums[right]))
        {
            result[p] = nums[right] * nums[right];
            right -= 1;
        }
        else
        {
            result[p] = nums[left] * nums[left];
            left += 1;
        }
        p -= 1;
    }
    return result;
};