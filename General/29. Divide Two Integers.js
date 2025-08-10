/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let HALF_INT_MIN = -1073741824;
var divide = function(dividend, divisor) 
{
    // Special case: overflow.
    if (dividend === -2147483648 && divisor === -1) 
        return 2147483647;
    
    /* We need to convert both numbers to negatives.
     * Also, we count the number of negatives signs. */
    let negatives = 2;
    if (dividend > 0) 
    {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) 
    {
        negatives--;
        divisor = -divisor;
    }

    let quotient = 0;
    /* Once the divisor is bigger than the current dividend,
     * we can't fit any more copies of the divisor into it. */
    while (divisor >= dividend) 
    {
        /* We know it'll fit at least once as divivend >= divisor.
         * Note: We use a negative powerOfTwo as it's possible we might have
         * the case divide(INT_MIN, -1). */
        let powerOfTwo = -1;
        let value = divisor;
        /* Check if double the current value is too big. If not, continue doubling.
         * If it is too big, stop doubling and continue with the next step */
        while (value >= HALF_INT_MIN && value + value >= dividend) 
        {
            value += value;
            powerOfTwo += powerOfTwo;
        }
        // We have been able to subtract divisor another powerOfTwo times.
        quotient += powerOfTwo;
        // Remove value so far so that we can continue the process with remainder.
        dividend -= value;
    }
    /* If there was originally one negative sign, then
     * the quotient remains negative. Otherwise, switch
     * it to positive. */
    return negatives != 1 ? -quotient : quotient;
};

    // //Repeated Substraction
    // // Constants.
    // var MAX_INT = 2147483647; // 2**31 - 1
    // var MIN_INT = -2147483648; // -2**31
    
    // // Special case: overflow.
    // if (dividend === MIN_INT && divisor === -1) 
    //     return MAX_INT;
    
    // // We need to convert both numbers to negatives.
    // // Also, we count the number of negatives signs.
    // var negatives = 2;
    // if (dividend > 0) 
    // {
    //     negatives -= 1;
    //     dividend = -dividend;
    // }
    // if (divisor > 0) 
    // {
    //     negatives -= 1;
    //     divisor = -divisor;
    // }

    // // Count how many times the divisor has to be
    // // added to get the dividend. This is the quotient.
    // var quotient = 0;
    // while (dividend - divisor <= 0) 
    // {
    //     quotient -= 1;
    //     dividend -= divisor;
    // }
    
    // // If there was originally one negative sign, then
    // // the quotient remains negative. Otherwise, switch
    // // it to positive.
    // return negatives !== 1 ? -quotient : quotient; 