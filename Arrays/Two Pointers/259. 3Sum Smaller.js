/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) 
{
    nums.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0; i < nums.length; i++)
    {
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right)
        {
            const sum = nums[i] + nums[left] + nums[right];

            if(sum < target)
            {
                count += right - left;
                left += 1;
            }
            else
                right -= 1;
        }
    }
    return count;
};