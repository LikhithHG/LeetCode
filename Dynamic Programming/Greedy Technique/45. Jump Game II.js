/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) 
{
    let totalJump = 0;//jumps we did
    let destination = nums.length - 1;//last index to reach
    let coverage = 0;//how far we can go
    let lastJumpIndex = 0;

    //Base case
    if(nums.length === 1)
        return 0;

    for(let i = 0; i < nums.length; i++)
    {
        coverage = Math.max(coverage, i + nums[i]);

        if(i === lastJumpIndex)
        {
            lastJumpIndex = coverage;
            totalJump++;

            if(coverage >= destination)
                break;
        }
    }
    return totalJump;
};