/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) 
{
    function checkPallindrome(i, j)
    {
        while(i < j)
        {
            if (s[i] !== s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }

    let i = 0;
    let j = s.length - 1;

    while(i < j)
    {
        if (s[i] !== s[j]) 
            return checkPallindrome(i, j - 1) || checkPallindrome(i + 1, j);
        i++;
        j--;
    }
    return true;
};