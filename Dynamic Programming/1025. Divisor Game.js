/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) 
{
    /*
        If n is even, Alice can always subtract 1 (since 1 is a divisor of any number), 
        leaving Bob with an odd number, and from then on, Alice can keep making it even for
        herself and odd for Bob. Eventually, Bob will face 1 and lose.
    */    
    return n % 2 === 0;
};