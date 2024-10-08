/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) 
{
    let count = 0;

    for(let i = 0; i < nums.length - 1; i++)
    {
        if(nums[i] > nums[i + 1])
        {
            if(count > 0)
                return false;
            
            if(i === 0 || nums[i - 1] <= nums[i + 1])
            {
                nums[i] = nums[i + 1];
            }
            else
            {
                nums[i + 1] = nums[i];
            }
            count += 1;
        }
    }
    return true;
};