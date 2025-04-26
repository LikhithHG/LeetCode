/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function(nums1, nums2) 
{
    let n = nums1.length;
    let difference = Array(n);
    for(let i = 0; i < n; i++)
        difference[i] = nums1[i] - nums2[i];

    difference.sort((a, b) => a - b);

    let result = 0;
    let left = 0;
    let right = n - 1;

    while(left < right)
    {
        if(difference[left] + difference[right] > 0)
        {
            result += right - left;
            right--;
        }
        else
            left++;
    }
    return result;
};