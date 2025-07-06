/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) 
{
    if (valueDiff < 0) 
        return false;
    
    const buckets = new Map();
    const w = valueDiff + 1;

    const getID = (x, w) => {
        return Math.floor(x / w);
    };

    for (let i = 0; i < nums.length; i++) 
    {
        const num = nums[i];
        const bucket = getID(num, w);

        if (buckets.has(bucket)) 
            return true;

        if (buckets.has(bucket - 1) && Math.abs(num - buckets.get(bucket - 1)) < w) 
            return true;

        if (buckets.has(bucket + 1) && Math.abs(num - buckets.get(bucket + 1)) < w) 
            return true;

        buckets.set(bucket, num);

        if (i >= indexDiff) 
        {
            const oldBucket = getID(nums[i - indexDiff], w);
            buckets.delete(oldBucket);
        }
    }

    return false;    
};