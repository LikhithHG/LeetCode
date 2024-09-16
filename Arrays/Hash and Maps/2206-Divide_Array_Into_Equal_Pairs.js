/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) 
{
    let freq = new Map();

    for(let num of nums)
    {
        if(freq.has(num))
            freq.set(num, freq.get(num) + 1);
        else
            freq.set(num, 1);
    }

    for(let count of freq.values())
    {
        if(count % 2 !== 0)
            return false;
    }
    return true;
};