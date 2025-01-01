/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumMatchingIndices = function(nums1, nums2) 
{
    const n = nums1.length;
    let maxMatches = 0;

    // Iterate over all possible shifts
    for (let k = 0; k < n; k++) 
    {
        let matches = 0;

        // Count matches for the current shift
        for (let i = 0; i < n; i++) 
        {
            if (nums1[(i + k) % n] === nums2[i]) 
                matches++;
        }

        // Update the maximum matches found
        maxMatches = Math.max(maxMatches, matches);
    }

    return maxMatches;    
};