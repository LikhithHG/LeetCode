/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) 
{
    let distinct = Array.from(new Set(nums));
    distinct.sort((a, b) => b - a);
    
    if (distinct.length >= 3) 
    {
        return distinct[2];
    } 
    else 
    {
        return distinct[0];
    }
};