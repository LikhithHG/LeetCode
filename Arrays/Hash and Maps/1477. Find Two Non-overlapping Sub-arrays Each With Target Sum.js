/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function minSumOfLengths(arr, target) {
    const n = arr.length;
    const INF = Infinity;
    
    // Initialize arrays to keep track of minimum lengths
    const minLenPrefix = new Array(n).fill(INF);
    const minLenSuffix = new Array(n).fill(INF);
    
    // Find minimum lengths for prefix subarrays
    let leftSum = 0;
    let minLen = INF;
    const leftMap = new Map();
    leftMap.set(0, -1);  // To handle subarrays starting from the beginning
    for (let i = 0; i < n; i++) 
    {
        leftSum += arr[i];
        
        // Check if there exists a subarray ending at the current index that sums to target
        if (leftMap.has(leftSum - target)) 
        {
            minLen = Math.min(minLen, i - leftMap.get(leftSum - target));
        }
        
        // Update prefix min length up to this index
        minLenPrefix[i] = minLen;
        
        // Store the current sum with its index
        leftMap.set(leftSum, i);
    }
    
    // Find minimum lengths for suffix subarrays
    let rightSum = 0;
    minLen = INF;
    const rightMap = new Map();
    rightMap.set(0, n);  // To handle subarrays ending at the last index
    for (let i = n - 1; i >= 0; i--) 
    {
        rightSum += arr[i];
        
        // Check if there exists a subarray starting at the current index that sums to target
        if (rightMap.has(rightSum - target)) 
        {
            minLen = Math.min(minLen, rightMap.get(rightSum - target) - i);
        }
        
        // Update suffix min length from this index
        minLenSuffix[i] = minLen;
        
        // Store the current sum with its index
        rightMap.set(rightSum, i);
    }
    
    // Combine the minimum prefix and suffix lengths to find the optimal solution
    let result = INF;
    for (let i = 0; i < n - 1; i++) 
    {
        if (minLenPrefix[i] < INF && minLenSuffix[i + 1] < INF) 
        {
            result = Math.min(result, minLenPrefix[i] + minLenSuffix[i + 1]);
        }
    }
    
    // If no valid solution is found, return -1
    return result === INF ? -1 : result;
}