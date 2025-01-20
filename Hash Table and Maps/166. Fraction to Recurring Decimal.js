/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) 
{
    if(numerator === 0)
        return '0';
    
    var fraction = [];
    //If either numerator or denominator is negative not both so bitwise XOR
    if((numerator < 0) ^ (denominator < 0))
        fraction.push('-');
    
    //Convert to positives
    let dividend = Math.abs(numerator);
    let divisor = Math.abs(denominator);

    fraction.push(Math.floor(dividend / divisor).toString());
    let remainder = dividend % divisor;

    //If the division gives a no fractional part return the answer
    if(remainder === 0)
        return fraction.join("");
    
    fraction.push(".");

    let hash = {};

    while(remainder !== 0)
    {
        if(remainder in hash)
        {
            fraction.splice(hash[remainder], 0, "(");
            fraction.push(")");
            break;
        }
        hash[remainder] = fraction.length;
        remainder *= 10;
        fraction.push(Math.floor(remainder / divisor).toString());
        remainder %= divisor;
    }
    return fraction.join("");
};