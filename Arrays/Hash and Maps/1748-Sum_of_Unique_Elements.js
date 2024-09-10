/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) 
{
    let freq = {};

    for(let num of nums)
    {
        if(freq[num])
        {
            freq[num] += 1;
        }
        else
        {
            freq[num] = 1;
        }
    }
    let uniqueSum = 0;
    for(num in freq)
    {
        if(freq[num] === 1)
        {
            uniqueSum += parseInt(num);
        }
    }
    return uniqueSum;
};