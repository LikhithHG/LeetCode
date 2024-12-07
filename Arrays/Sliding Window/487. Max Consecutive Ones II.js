/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) 
{
    let left = 0;
    let right = 0;
    let longSeq = 0;
    let numZeroes = 0;

    while(right < nums.length)
    {
        if(nums[right] === 0)
            numZeroes++;

        while(numZeroes === 2)
        {
            if(nums[left] === 0)
               numZeroes--;
            
            left++;
        }

        longSeq = Math.max(longSeq, right - left + 1);
        right++;
    }
    return longSeq;
};