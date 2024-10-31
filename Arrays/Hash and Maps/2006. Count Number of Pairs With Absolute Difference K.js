/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) 
{
    let count = 0;
    let numCount = new Map();

    for (let num of nums) 
    {
        // Check if there is a pair (num, num - k)
        if (numCount.has(num - k)) 
        {
            count += numCount.get(num - k);
        }
        // Check if there is a pair (num, num + k)
        if (numCount.has(num + k)) 
        {
            count += numCount.get(num + k);
        }

        // Update the frequency of the current number
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    return count;
};