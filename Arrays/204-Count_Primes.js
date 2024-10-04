/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) 
{
    if(n <= 2)
        return 0;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i * i < n; i++)
    {
        if(isPrime[i])
        {
            for(j = i * i; j < n; j += i)
                isPrime[j] = false;
        }
    }

    let count = 0;
    for(let i = 2; i < n; i++)
    {
        if(isPrime[i])
            count += 1;
    }
    return count;
};