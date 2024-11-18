/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) 
{
    let left = 0;
    let oddCount = 0;
    let result = 0;
    let count = 0;

    for(let right = 0; right < nums.length; right++)
    {
        if(nums[right] % 2 !== 0)
        {
            oddCount += 1;
            count = 0;
        }
        while(oddCount === k)
        {
            if(nums[left] % 2 !== 0)
                oddCount -= 1;
            count += 1;
            left += 1;
        }
        result += count;
    }
    return result;
};