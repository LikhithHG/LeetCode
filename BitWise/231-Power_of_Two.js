/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) 
{
    //Always the number with power of two has only one as bit 1
    //So we need to check the count of number of 1s in binary i.e the hamming weight
    if(n <= 0)
        return false;

    return (n & (n - 1)) === 0;
};