/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) 
{
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while(p1 >= 0 && p2 >= 0)
    {
        if(nums1[p1] > nums2[p2])
        {
            nums1[p] = nums1[p1];
            p1 = p1 - 1;
        }
        else
        {
            nums1[p] = nums2[p2];
            p2 = p2 - 1;
        }
        p = p - 1;
    }

    /*
        If p2 reaches below 0, the process is complete.
        If p1 reaches below 0 and there are still elements in nums2, copy the remaining elements of nums2 into nums1.
    */
    if (p2 >= 0) 
    {
        for (let i = 0; i <= p2; i++) 
        {
            nums1[i] = nums2[i];
        }
    }
};