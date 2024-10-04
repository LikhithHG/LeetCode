/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) 
{
    const n = nums.length;

    let freq = new Map();

    for(let num of nums)
    {
        freq.set(num,(freq.get(num) || 0) + 1);
    }

    let result = [];

    for(let[num, count] of freq)
    {
        if(count > Math.floor(n / 3))
        {
            result.push(num);
        }
    }
    return result;
};