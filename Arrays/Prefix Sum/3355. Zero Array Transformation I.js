/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) 
{
    let diff = Array(nums.length + 1).fill(0);

    for(const [left, right] of queries)
    {
        diff[left] += 1;
        diff[right + 1] -= 1;
    }

    //Calculate the prefix sum and if that is not working out return false immeditely
    let prefixSum = 0;
    for(let i = 0; i < nums.length; i++)
    {
        prefixSum += diff[i];
        if(nums[i] > prefixSum)
            return false;
    }
    return true;
};