/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function(l, r) 
{
    //If it is a square of a prime number
    let totalNumbers = r - l + 1;
    let specialCount = 0;

    // Start from the smallest integer whose square is >= l
    let start = Math.ceil(Math.sqrt(l));
    // End at the largest integer whose square is <= r
    let end = Math.floor(Math.sqrt(r));

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            specialCount++;
        }
    }

    return totalNumbers - specialCount;  
};
function isPrime(n) 
{
    if (n < 2) 
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
    {
        if (n % i === 0) 
            return false;
    }
    return true;
}