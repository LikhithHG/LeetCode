/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function(arrays) 
{
    const countMap = new Map();
    const totalArrays = arrays.length;

    for (const arr of arrays) 
    {
        const unique = new Set(arr); // avoid double-counting within one array
        for (const num of unique) 
            countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const result = [];
    for (const [num, count] of countMap) 
    {
        if (count === totalArrays) 
            result.push(num);
    }

    result.sort((a, b) => a - b); // Optional: sort the result
    return result;    
};