/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) 
{
    let count = 0;
    let windowSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) 
        windowSum += arr[i];

    if (windowSum / k >= threshold) 
        count++;

    // Slide the window
    for (let i = k; i < arr.length; i++) 
    {
        windowSum += arr[i] - arr[i - k];
        if (windowSum / k >= threshold) 
            count++;
    }

    return count;
};