/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) 
{
    let n = x, num = 0
    if(x < 0)
        return false
    
    while(n>0)
    {
        let unit = n % 10
        n = Math.floor(n/10)
        num = num*10 + unit
    }

    if(x === num)
        return true
    
    else
        return false
};