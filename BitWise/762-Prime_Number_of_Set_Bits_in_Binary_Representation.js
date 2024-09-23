/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) 
{
    let count = 0;
    for(let i = left; i <= right; i++)
    {
        let setBits = i.toString('2').split('0').join('').length;
        if(isPrime(setBits))
            count += 1;
    }
    return count;
};
var isPrime = function(n)
{
    if(n < 2)
        return false;
    for(i = 2; i * i <= n; i++)
    {
        if(n % i === 0)
            return false;
    }
    return true;
}