/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) 
{
    nums.sort((a, b) => a - b);

    let greatness = 0;
    let j = 0;

    // Step 2: Use two pointers to maximize greatness
    for (let i = 0; i < nums.length; i++) 
    {
        while (j < nums.length && nums[j] <= nums[i])
            j++;
        if (j < nums.length) 
        {
            greatness++;
            j++;
        }
    }

    return greatness;    
};