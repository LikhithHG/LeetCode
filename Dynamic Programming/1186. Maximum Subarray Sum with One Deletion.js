/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) 
{
    const n = arr.length;

    if (n === 1) 
        return arr[0]; // Edge case: Only one element
    
    // Initialize arrays for max subarray sums from the left and right
    let leftMax = Array(n).fill(0);
    let rightMax = Array(n).fill(0);

    leftMax[0] = arr[0]
    for(let i = 1; i < n; i++)
        leftMax[i] = Math.max(arr[i], leftMax[i - 1] + arr[i]);

    rightMax[n - 1] = arr[n - 1];
    for(let i = n - 2; i >= 0; i--)
        rightMax[i] = Math.max(arr[i], rightMax[i + 1] + arr[i]);
    
    let maxSum = Math.max(...leftMax);
    for(i = 1; i < n - 1; i++)
        maxSum = Math.max(maxSum, leftMax[i - 1] + rightMax[i + 1]);
    
    return maxSum;
};