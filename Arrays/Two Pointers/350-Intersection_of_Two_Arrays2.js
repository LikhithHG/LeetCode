/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) 
{
    nums1.sort((a, b) => a - b);
     nums2.sort((a, b) => a - b);
    
    // Step 2: Initialize two pointers
    let pointer1 = 0;
    let pointer2 = 0;
    
    //array result
    const result = [];
    
    // Step 4: Traverse both arrays with two pointers
    while (pointer1 < nums1.length && pointer2 < nums2.length) 
    {
        if (nums1[pointer1] === nums2[pointer2]) 
        {
            // Common element found, add to the set
            result.push(nums1[pointer1]);
            // Move both pointers forward
            pointer1++;
            pointer2++;
        } 
        else if (nums1[pointer1] < nums2[pointer2]) 
        {
            // Move pointer1 to the right
            pointer1++;
        } 
        else 
        {
            // Move pointer2 to the right
            pointer2++;
        }
    }
    
    // Step 5: Convert the set to an array and return it
    return result;
};