/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) 
{
    let totalSum = 0;
    let maxKadane = -Infinity;
    let minKadane = Infinity;
    let currentMax = 0;
    let currentMin = 0;

    for(let num of nums)
    {
        totalSum += num;

        //To find if number lies in previous array or to start a new array
        currentMax = Math.max(num, currentMax + num);
        //find the maximum sum found so far
        maxKadane = Math.max(maxKadane, currentMax);

        //To find if number lies in previous array or to start a new array
        currentMin = Math.min(num, currentMin + num);
        //find the maximum sum found so far
        minKadane = Math.min(minKadane, currentMin);
    }

    if(maxKadane < 0)
        return maxKadane;
    
    return Math.max(maxKadane, totalSum - minKadane);
};