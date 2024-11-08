/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) 
{
    let partitionIdx = 0;
    let maxLeftPartition = nums[0];
    let maxLeft = nums[0];

    for(let i = 1; i < nums.length; i++)
    {
        maxLeft = Math.max(maxLeft, nums[i]);

        if(nums[i] < maxLeftPartition)
        {
            partitionIdx = i;
            maxLeftPartition = maxLeft;
        }
    }
    return partitionIdx + 1;
};