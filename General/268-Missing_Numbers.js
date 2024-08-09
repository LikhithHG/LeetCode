/**
 * @param {number[]} nums
 * @return {number}
 */

// This is using the bitwise XOR
var missingNumber = function(nums) 
{
    let missing = nums.length;

    for(let i = 0; i < nums.length; i++)
    {
        missing ^= i ^ nums[i];
    }
    return missing;
};

/*
This is using Math add functions
var missingNumber = function(nums) 
{
    let missing = nums.length
    let actual = missing * (missing + 1)/2;
    let sum = 0
    for (let value of nums) 
    {
        sum = sum + value;
    }
    return actual - sum;
    
};
*/