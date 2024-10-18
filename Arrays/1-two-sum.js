/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) 
{
    let sorted = nums.map((num, index) => ({num, index})).sort((a, b) => a.num - b.num);
    let left = 0;
    let right = sorted.length - 1;

    while(left < right)
    {
        let sum = sorted[left].num + sorted[right].num;
        if(sum === target)
            return[sorted[left].index, sorted[right].index];
        else if(sum < target)
            left += 1;
        else
            right -= 1;
    }
    return [];
};
/*
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
*/