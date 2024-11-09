/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) 
{
    if(nums2.length < nums1.length)
        [nums1, nums2] = [nums2, nums1];
    
    let m = nums1.length;
    let n = nums2.length;
    let totalLength = m + n;

    //Total elements in the left partition
    let halfLength = Math.floor(totalLength / 2);
    
    //Binary Search for the smallest array
    let left = 0;
    let right = m;
    while(left <= right)
    {
        //Mid element of smallest array
        let mid1 = Math.floor((left + right) / 2);
        //Mid element of largest array
        let mid2 = halfLength - mid1;

        nums1Left = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
        nums1Right = mid1 === m ? Infinity : nums1[mid1];

        nums2Left = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
        nums2Right = mid2 === n ? Infinity :nums2[mid2];

        if(nums1Left <= nums2Right && nums2Left <= nums1Right)
        {
            //Odd length
            if(totalLength % 2 === 1)
                return Math.min(nums1Right, nums2Right);
            return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
        }
        else if(nums1Left > nums2Right)
            right = mid1 - 1;
        else
            left = mid1 + 1;
    }
};