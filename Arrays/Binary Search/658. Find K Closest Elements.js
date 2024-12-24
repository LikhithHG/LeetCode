/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) 
{
     let result = [];

    // Base case: If the array length is equal to k, return the whole array
    if (arr.length === k)
        return arr;

    // Perform binary search to find the closest element to x
    let left = 0;
    let right = arr.length;
    let mid;

    while (left < right) 
    {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] >= x)
            right = mid;
        else 
            left = mid + 1;
    }

    // Initialize sliding window bounds
    left -= 1; // Left points to the element just before `x` or closest smaller element
    right = left + 1; // Right points to the element just after `x`

    // Expand the window until it includes k elements
    while (right - left - 1 < k) 
    {
        // Check bounds to avoid index errors
        if (left === -1) 
        {
            right++;
            continue;
        }

        if (right === arr.length || Math.abs(arr[left] - x) <= Math.abs(arr[right] - x))
            left--;
        else
            right++;
    }

    // Build the result from the sliding window
    for (let i = left + 1; i < right; i++)
        result.push(arr[i]);

    return result;
};

/*
 // Sort the array with custom comparator: based on the absolute difference from x
    let sortedArr = arr.slice(); // Create a shallow copy of the array
    sortedArr.sort((num1, num2) => {
        let diff1 = Math.abs(num1 - x);
        let diff2 = Math.abs(num2 - x);

        // Sort by absolute difference, and if equal, sort by value
        if (diff1 === diff2) {
            return num1 - num2;
        }
        return diff1 - diff2;
    });

    // Take the first k elements
    sortedArr = sortedArr.slice(0, k);

    // Sort the result in ascending order
    sortedArr.sort((a, b) => a - b);

    return sortedArr;  
*/