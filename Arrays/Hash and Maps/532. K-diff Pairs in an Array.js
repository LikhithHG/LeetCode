/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) 
{
    //Absolute difference cannot be negatve
    if(k < 0)
        return 0;

    let frequency = new Map();
    let count = 0;

    for(let num of nums)
        frequency.set(num, (frequency.get(num) || 0) + 1);
    
    if(k > 0)
    {
        for(let [num, freq] of frequency)
        {
            if(frequency.has(num + k))
                count ++;
        }
    }
    else if(k === 0)
    {
       for(let [num, freq] of frequency)
        {
            if(freq > 1)
                count ++;
        } 
    }
    return count;
};