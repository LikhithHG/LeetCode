/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) 
{
    if (s === null || s.length === 0) 
        return 0;

    let currentNumber = 0;
    let lastNumber = 0;
    let result = 0;
    let operation = '+';

    for (let i = 0; i < s.length; i++) 
    {
        const currentChar = s[i];

        if (!isNaN(currentChar) && currentChar !== ' ') 
            currentNumber = currentNumber * 10 + parseInt(currentChar);

        // Check if currentChar is an operator or we are at the end of the string
        if ((isNaN(currentChar) && currentChar !== ' ') || i === s.length - 1) 
        {
            if (operation === '+') 
            {
                result += lastNumber;
                lastNumber = currentNumber;
            } 
            else if (operation === '-') 
            {
                result += lastNumber;
                lastNumber = -currentNumber;
            } 
            else if (operation === '*') 
                lastNumber = lastNumber * currentNumber;
            else if (operation === '/') 
                lastNumber = Math.trunc(lastNumber / currentNumber);
            
            operation = currentChar; // Safe here because currentChar is guaranteed to be non-digit or last char
            currentNumber = 0;
        }
    }

    result += lastNumber;
    return result;
};