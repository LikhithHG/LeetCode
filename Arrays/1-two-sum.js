/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let size = nums.length;
    for(let i = 0; i < size; i++)
    {
        for(let j = i + 1; j < size; j++)
        {
            if(nums[i] + nums[j] === target)
                return [i, j]
        }
    }
    return []
};