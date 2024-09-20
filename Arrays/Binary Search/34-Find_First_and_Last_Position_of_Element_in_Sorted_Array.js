/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) 
{
    let left = leftBound(nums, target);
    let right = rightBound(nums, target);

    return [left, right];
};

var leftBound = function(nums, target)
{
    let index = -1;
    let low = 0;
    let high = nums.length - 1;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target)
        {
            index = mid;
            high = mid - 1;
        }
        else if(nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return index;
}

var rightBound = function(nums, target)
{
    let index = -1;
    let low = 0;
    let high = nums.length - 1;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target)
        {
            index = mid;
            low = mid + 1;
        }
        else if(nums[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return index;
}