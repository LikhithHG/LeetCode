/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) 
{
    let first = 0;
    let last = s.length - 1;

    while(first <= last)
    {
        if(!/[a-zA-Z0-9]/.test(s[first]))
            first++;
        else if(!/[a-zA-Z0-9]/.test(s[last]))
            last--;
        else
        {
            if (s[first].toLowerCase() !== s[last].toLowerCase()) 
                return false;
            first++;
            last--;
        }
    }
    return true;
};