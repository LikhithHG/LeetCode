/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) 
{
    let freq = new Map();
    nums.forEach(num => {
        freq.set(num, (freq.get(num) || 0) + 1);
    });
    
    let left = 0, result = 0, total = nums.length;
    
    for (let [num, count] of freq) 
    {
        let right = total - left - count;
        result += left * count * right;
        left += count;
    }
    
    return result;    
};