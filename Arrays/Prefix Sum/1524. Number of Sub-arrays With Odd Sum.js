/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) 
{
    const MOD = 1_000_000_007;
    let count = 0;
    let prefixSum = 0;
    let oddCount = 0, evenCount = 1; // prefix sum 0 is even

    for (let num of arr) 
    {
        prefixSum += num;

        if (prefixSum % 2 === 0) 
        {
            count += oddCount;
            evenCount++;
        } 
        else 
        {
            count += evenCount;
            oddCount++;
        }

        count %= MOD;
    }

    return count;    
};