/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) 
{
    let remainder = new Map();

    //To set that sum 0 is possible at index -1
    remainder.set(0, -1);

    let sum = 0;
    for(let i = 0; i < nums.length; i++)
    {
        sum += nums[i];

        if(k !== 0)
            sum %= k;
        
        if(remainder.has(sum))
        {
            //check if the length is 2
            if(i - remainder.get(sum) > 1)
                return true;
        }
        else
            remainder.set(sum, i);
    }
    return false;
};