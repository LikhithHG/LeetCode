/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function(nums, target) 
{
    // Binary Search to find the first index of target
    function findFirstIndex() 
    {
        let left = 0, right = nums.length - 1;
        while (left < right) 
        {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) 
                left = mid + 1;
            else 
                right = mid;
        }
        return nums[left] === target ? left : -1;
    }

    const firstIndex = findFirstIndex();

    // If target is not found at all
    if (firstIndex === -1) 
        return false;

    const checkIndex = firstIndex + Math.floor(nums.length / 2);

    // Check if this index is within bounds and still target
    return checkIndex < nums.length && nums[checkIndex] === target;    
};