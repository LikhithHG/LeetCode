/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) 
{
    const size = primes.length;
    const ugly = new Array(n).fill(1);
    const indexes = new Array(size).fill(0);
    const values = primes.slice();  // Initialize with primes

    for (let i = 1; i < n; i++) 
    {
        let nextUgly = Math.min(...values);
        ugly[i] = nextUgly;

        for (let j = 0; j < size; j++) 
        {
            if (values[j] === nextUgly) 
            {
                indexes[j]++;
                values[j] = primes[j] * ugly[indexes[j]];
            }
        }
    }

    return ugly[n - 1];    
};