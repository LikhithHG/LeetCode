/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) 
{
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++)
    {
        if(hashMap.has(nums[i]))
        {
            if(i - hashMap.get(nums[i]) <= k)
                return true;
        }
        hashMap.set(nums[i], i);
    }
    return false;
};