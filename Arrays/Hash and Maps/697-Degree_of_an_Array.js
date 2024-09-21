/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) 
{
    let frequency = {};
    let firstIndex = {};
    let lastIndex = {};
    let degree = 0;

    for(let i = 0; i < nums.length; i++)
    {
        let num = nums[i];

        if(firstIndex[num] === undefined)
            firstIndex[num] = i;

        lastIndex[num] = i;

        if(frequency[num] === undefined)
            frequency[num] = 0;
        
        frequency[num] += 1;

        degree = Math.max(degree, frequency[num]);
    }

    let minLength = nums.length;

    for(let num in frequency)
    {
        if(frequency[num] === degree)
        {
            let SubArrayLen = lastIndex[num] - firstIndex[num] + 1; 
            minLength = Math.min(minLength, SubArrayLen);
        }
    }

    return minLength;
};