/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) 
{
    const result = [];

    // Step 1: Build prefix XOR array in-place
    for (let i = 1; i < arr.length; i++) 
        arr[i] ^= arr[i - 1];

    // Step 2: Answer each query
    for (const [L, R] of queries) 
    {
        if (L > 0) 
            result.push(arr[L - 1] ^ arr[R]);
        else 
            result.push(arr[R]);
    }

    return result;    
};