/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) 
{
    let openBrackets = 0;
    let minAddsRequired = 0;  

    for (let i = 0; i < s.length; i++)  
    {
        let char = s[i];

        if(char === '(')
            openBrackets += 1;
        else
        {
            // If an open bracket exists, match it with the closing one
            // If not, we need to add an open bracket.
            if (openBrackets > 0) 
                openBrackets--;
            else 
                minAddsRequired++;     
        }
    }
    return minAddsRequired + openBrackets;
};