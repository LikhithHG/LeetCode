/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) 
{
    let count = 0;
    for(let num = 1; num <= n; num++)
    {
        let s = num.toString();
        let isValid = true;
        let hasChangedDigit = false;

        for(let ch of s)
        {
            if(ch === '3' || ch === '4' || ch === '7')
            {
                isValid = false;
                break;
            }
            if(ch === '2' || ch === '5' || ch === '6' || ch === '9')
                hasChangedDigit = true;
        }
        if(isValid && hasChangedDigit)
            count++;
    }
    return count;
};