/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) 
{
    let count = 0;
    let numStr = num.toString();

    for (let char of numStr) 
    {
        let digit = parseInt(char);
        if (digit !== 0 && num % digit === 0)
            count++;
    }
    return count;    
};