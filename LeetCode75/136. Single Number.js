/**
 * @param {number[]} nums
 * @return {number}
 */

 
var singleNumber = function(nums) 
{
    /*
    Properties of XOR:

    a ^ a = 0 (any number XORed with itself is 0)
    a ^ 0 = a (any number XORed with 0 remains the same)
    XOR is commutative and associative (the order of operations does not matter)
    Algorithm:

    Initialize a variable result to 0.
    Iterate through each number in the array and XOR it with result.
    By the end of the iteration, all paired numbers will cancel out and result will hold the single number.
    */
    
    let result = 0;
    for(let i = 0; i < nums.length; i++)
    {
        result = result ^ nums[i];
    }
    return result;
};