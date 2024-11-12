/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) 
{
    let isPrime = sieveOfErathosthenes(n);
    let primes = [];

    for(let i = 2; i < n; i++)
    {
        if(isPrime[i])
            primes.push(i);
    }
    const primeSet = new Set(primes);
    const pairs = [];
    for(let prime of primeSet)
    {
        let complement = n - prime;
        if(primeSet.has(complement) && prime <= complement)
            pairs.push([prime, complement]);
    }
    return pairs;
};
function sieveOfErathosthenes(target) 
{
    let isPrime = new Array(target + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= target; i++) 
    {
        if (isPrime[i]) 
        {
            for (let j = i * i; j <= target; j += i)
                isPrime[j] = false;
        }
    }
    return isPrime;
}