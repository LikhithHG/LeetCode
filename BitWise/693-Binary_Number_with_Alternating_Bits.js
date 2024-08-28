/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) 
{
    /*
    Step 1: The idea is shift the number by 1 to right.
    Step 2: XOR shifted number with the original number if there is alternate bits then result will be number with all 1s.
    Step 3: Now add 1 to the result. By doing so there will be only 1 set bit and number will be power of 2.
    */

    //Step 1
    let shift = n >> 1;

    //Step 2
    let xor = n ^ shift;

    //Step 3
    let result = xor + 1;

    return (result & (result - 1)) === 0;

    /*
     let xor = n ^ (n >> 1);
    return (xor & (xor + 1)) === 0;
    */
};