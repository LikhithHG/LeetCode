/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) 
{
    let min = Math.min(...nums);
    let sum = nums.reduce((acc, num) => acc + num, 0);

    return sum - min * nums.length;
};
