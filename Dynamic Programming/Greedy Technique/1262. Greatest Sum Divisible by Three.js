/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) 
{
    //dp array that stores sum based on num % 3
    const dp = [0, -Infinity, -Infinity];

    for(let num of nums)
    {
        //temporary copy of array dp
        let temp = [...dp];

        //Iterate through each remainder array
        //Sum calculated if the sum is a valid integer
        for(let i = 0; i < 3; i++)
        {
            const newIdx = (temp[i] + num) % 3;
            dp[newIdx] = Math.max(dp[newIdx], temp[i] + num);
        }
    }
    return dp[0];
};