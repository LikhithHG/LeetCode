/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) 
{
    let medians = [];
    let window = nums.slice(0, k).sort((a, b) => a - b); // Sort the first window
    let mid = Math.floor(k / 2);

    for (let i = k; ; i++) 
    {
        // Push the current median
        let median = (k % 2 === 0) ? (window[mid - 1] + window[mid]) / 2 : window[mid];
        medians.push(median);

        // If all done, break
        if (i === nums.length) 
            break;

        // Insert incoming element into the window, maintaining sorted order
        let incoming = nums[i];
        let index = binarySearch(window, incoming);
        window.splice(index, 0, incoming);

        // Remove outgoing element from the window
        let outgoing = nums[i - k];
        let outIndex = binarySearch(window, outgoing);
        window.splice(outIndex, 1);

        // Recalculate the mid element after modifications
        mid = Math.floor(k / 2);
    }

    return medians;
    
};

// Helper function to find the index to insert a number and keep the array sorted
function binarySearch(arr, num) 
{
    let low = 0;
    let high = arr.length;

    while (low < high) 
    {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < num) 
            low = mid + 1;
        else 
            high = mid;
    }

    return low;
}