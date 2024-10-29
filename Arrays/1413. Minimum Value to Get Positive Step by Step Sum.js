/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) 
{
    let cumulativeSum = 0;
    let minCumulativeSum = 0;

    for(let num of nums)
    {
        cumulativeSum += num;
        minCumulativeSum = Math.min(minCumulativeSum, cumulativeSum);
    }    
    return 1 - minCumulativeSum;
};