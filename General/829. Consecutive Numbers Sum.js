/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function(n) 
{
    //N = xk
    let count = 0;
    const upperLimit = Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);

    for (let k = 1; k <= upperLimit; ++k) 
    {
        n -= k;
        if (n % k === 0)
            count++;
    }

    return count;
};