/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) 
{
    let result = '';
    let j = s.length - 1;

    for (let i = 0; i < s.length; i++) 
    {
        if (/[a-zA-Z]/.test(s[i])) 
        {
            while (!/[a-zA-Z]/.test(s[j])) 
                j--;
            result += s[j--];
        } 
        else 
            result += s[i];
    }
        return result;    
};