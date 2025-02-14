/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) 
{
    /*
        The number of 1's in a number i can be derived from the number of 1's in a smaller number. 
        Specifically, consider how the number of 1's changes as you move from i to i+1 in binary form:

        Even numbers: For an even number i, its binary representation ends in a 0. 
        Therefore, the number of 1's in i is the same as the number of 1's in i // 2. 
        
        Odd numbers: For an odd number i, its binary representation ends in a 1. 
        Therefore, the number of 1's in i is 1 more than the number of 1's in i // 2.discard remainder(ex: 5//2 = 2)

        countBits[i] = countBits[i // 2] + (i % 2)
    */

    let countBits = [0];

    for(i = 1; i <= n; i++)
    {
        countBits[i] = countBits[Math.floor(i/2)] + (i % 2);
    }
    return countBits;
};