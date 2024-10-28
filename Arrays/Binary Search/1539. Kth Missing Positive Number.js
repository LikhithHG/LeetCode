/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) 
{
    let left = 0;
    let right = arr.length - 1;

    // Binary search for the position where the kth missing number falls
    while (left <= right) 
    {
        const mid = Math.floor((left + right) / 2);
        const missingCount = arr[mid] - (mid + 1);

        if (missingCount < k) 
            left = mid + 1;
        else 
            right = mid - 1;
    }

    // The kth missing number will be in the gap found
    return left + k;
};