/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) 
{
    let xor = 0;
    for(let num of nums)
        xor ^= num;
    
    let diff = xor & -xor;
    let x = 0;
    let y = 0;
    for(let num of nums)
    {
        if(diff & num)
            x ^= num;
        else
            y ^= num;
    }
    return [x, y];
};