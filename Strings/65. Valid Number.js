/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) 
{
    let seenDigit = false;
    let seenExponent = false;
    let seenDot = false;

    for (let i = 0; i < s.length; i++)
    {
        let current = s[i];

        if(!isNaN(current))
            seenDigit = true;
        
        else if(current === '+' || current === '-')
        {
            //f the character is a sign, check if it is either the first character of the input, or if the character before it is an exponent. If not, return false.
            if(i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E')
                return false
        }

        else if(current === 'e' || current === 'E')
        {
            /*
                If the character is an exponent, first check if we have already seen an exponent or if we have not yet seen a digit. If either is true, then return false. Otherwise, set seenExponent = true, and seenDigit = false. We need to reset seenDigit because after an exponent, we must construct a new integer.
            */
            if(seenExponent || !seenDigit)
                return false;
            
            seenExponent = true;
            seenDigit = false;
        }
        
        else if(current === '.')
        {
            //If the character is a dot, first check if we have already seen either a dot or an exponent. If so, return false. Otherwise, set seenDot = true.
            if(seenDot || seenExponent)
                return false;
            
            seenDot = true;
        }

        //If the character is anything else, return false
        else
            return false;
    }
    return seenDigit;
};