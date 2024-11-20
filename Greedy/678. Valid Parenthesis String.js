/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) 
{
    let low = 0;
    let high = 0;

    for(let char of s)
    {
        if(char === '(')
        {
            low++;
            high++;
        }
        else if(char === ')')
        {
            low = Math.max(low - 1, 0);
            high--;
        }
        else if(char === '*')
        {
            low = Math.max(low - 1, 0);
            high++;
        }

        if(high < 0)
            return false;
    }    
    return low === 0;
};