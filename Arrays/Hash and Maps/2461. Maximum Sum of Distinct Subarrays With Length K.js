/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) 
{
    let begin = 0;
    let end = 0;
    let currentSum = 0;
    let answer = 0;
    let numIndex = new Map();

    while(end < nums.length)
    {
        let currentNum = nums[end];
        let lastOccurance = numIndex.has(currentNum) ? numIndex.get(currentNum) : -1;

        while(begin <= lastOccurance || end - begin + 1 > k)
        {
            currentSum -= nums[begin];
            begin += 1;
        }

        numIndex.set(currentNum, end);
        currentSum += currentNum;

        if(end - begin + 1 === k)
            answer = Math.max(answer, currentSum);
        
        end += 1;
    }

    return answer;
};