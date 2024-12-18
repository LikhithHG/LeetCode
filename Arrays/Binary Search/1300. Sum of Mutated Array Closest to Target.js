/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) 
{
    // Helper function to calculate the sum after mutation
    function mutatedSum(v) 
    {
        return arr.reduce((sum, num) => sum + Math.min(num, v), 0);
    }

    let low = 0, high = Math.max(...arr);
    let result = high;
    let minDiff = Infinity;

    while (low <= high) 
    {
        const mid = Math.floor((low + high) / 2);
        const sum = mutatedSum(mid);

        // Check the absolute difference
        const diff = Math.abs(sum - target);

        if (diff < minDiff || (diff === minDiff && mid < result)) 
        {
            minDiff = diff;
            result = mid;
        }

        // Adjust search range
        if (sum < target)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return result;
};