/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) 
{
    nums = nums.map(String);

    nums.sort((a, b) => {
        return((b + a) - (a + b));
    })
    let result = nums.join('');
    return result[0] === '0' ? '0' : result;
};