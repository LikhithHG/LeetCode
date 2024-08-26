/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) 
{
    let hash = {};
    let maxGap = 0;

    for(let num of nums)
        hash[num] = true;

    let sorted = Object.keys(hash);

    if(sorted.length < 2)
        return 0;

    for(let i = 1; i < sorted.length; i++)
    {
        maxGap = Math.max(maxGap, sorted[i] - sorted[i - 1]);
    }

    return maxGap;
};