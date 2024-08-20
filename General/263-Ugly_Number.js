/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) 
{
    let divisors = [2, 3, 5];

    if(n <= 0)
        return false    
    
    for(let factor of divisors)
    {
        while(n % factor === 0)
            n = n / factor;
    }
    return n === 1;
};