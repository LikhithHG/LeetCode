/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) 
{
    function isNoZero(num)
    {
        while(num > 0)
        {
            if(num % 10 === 0)
                return false;
            num = Math.floor(num / 10);
        }
        return true;
    }
    for(let a = 1; a < n; a++) 
    {
        let b = n - a;
        if(isNoZero(a) && isNoZero(b))
            return [a, b];
    }   
    return [];
};