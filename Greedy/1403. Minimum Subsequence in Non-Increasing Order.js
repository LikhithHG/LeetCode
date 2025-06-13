/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) 
{
    // Sort the array in descending order
    nums.sort((a, b) => b - a);

    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let currSum = 0;
    const result = [];

    for (let num of nums) 
    {
        currSum += num;
        result.push(num);
        if (currSum > totalSum - currSum) 
            return result;
    }    
};