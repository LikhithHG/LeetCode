/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) 
{
    let ones = twos = 0;

    for(let num of nums)
    {
        ones = (ones ^ num) & ~twos;

        twos = (twos ^ num) & ~ones;
    }
    return ones;
};