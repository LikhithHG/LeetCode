/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) 
{
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) 
        return result;

    let sum = 0;
    let start, end;

    if (k > 0) 
    {
        start = 1;
        end = k;
    } 
    else 
    {
        start = n + k;
        end = n - 1;
    }

    // Initial sum calculation
    for (let i = start; i <= end; i++) 
        sum += code[i % n];

    // Sliding window
    for (let i = 0; i < n; i++) 
    {
        result[i] = sum;
        sum -= code[start % n];
        sum += code[(end + 1) % n];
        start++;
        end++;
    }

    return result;
};