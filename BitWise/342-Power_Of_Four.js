/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) 
{
    //For a number to be power of 4 it must be power of 4 
    //So (n & (n - 1) == 0)
    //Also in power of 4 we have even number of zeros until we get first set bit
    //It means we have 1 as a set bit in even position 
    //Ex: 1 (0th position), 4 = 100 (2nd position), 16 = 10000 (4th position)
    // To check that even position we use all 1s in even position like 101010101010101
    //0101 in binary = 5 in hexadecimal
    //0x55555555 = 32 bit hexa decimal with 1s in even position

    return (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
    
};