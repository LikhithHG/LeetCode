/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) 
{
    while(b !== 0)
    {
        //Find the carry
        let carry = a & b;

        //Sum without carry
        a = a ^ b;

        //carry shifted left by one position
        b = carry << 1;
    }
     return a;
};