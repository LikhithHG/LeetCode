/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) 
{
    let count = 0;
    const map = new Map();

    for (let a of nums1) 
    {
        for (let b of nums2) 
        {
            const sum = a + b;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    for (let c of nums3) 
    {
        for (let d of nums4) 
        {
            const target = -(c + d);
            if (map.has(target)) 
                count += map.get(target);
        }
    }

    return count;
};