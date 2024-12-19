/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) 
{
    // Sort strings based on numerical value
    nums.sort((a, b) => {
        if (a.length === b.length)
            // Compare lexicographically if lengths are equal
            return b.localeCompare(a);
        // Compare based on length (larger numbers first)
        return b.length - a.length;
    });

    // Return the kth largest number as a string
    return nums[k - 1];
};