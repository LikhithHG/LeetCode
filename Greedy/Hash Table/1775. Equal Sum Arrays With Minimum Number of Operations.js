/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) 
{
    const sum1 = nums1.reduce((a, b) => a + b, 0);
    const sum2 = nums2.reduce((a, b) => a + b, 0);
    
    if (sum1 === sum2) 
        return 0;
    
    // Determine which array has a higher sum and set the target difference
    let diff = Math.abs(sum1 - sum2);
    const changes = [];

    // Calculate potential changes for nums1 and nums2
    if (sum1 > sum2) 
    {
        nums1.forEach(num => changes.push(num - 1));
        nums2.forEach(num => changes.push(6 - num));
    } 
    else 
    {
        nums1.forEach(num => changes.push(6 - num));
        nums2.forEach(num => changes.push(num - 1));
    }

    // Sort changes in descending order to apply the largest reductions first
    changes.sort((a, b) => b - a);

    let operations = 0;
    for (let change of changes) 
    {
        diff -= change;
        operations++;
        if (diff <= 0) 
            return operations;
    }

    // If we exhaust all changes and still have a non-zero difference
    return -1;
};
