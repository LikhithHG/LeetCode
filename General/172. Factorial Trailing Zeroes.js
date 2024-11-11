/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) 
{
    //It depends on the factors of 10 i.e 2 and 5
    //Always the number of factors of 2 will always be grater than that of 5 and hence it depends on factors of 5
    /*
    100/5=20
    100/25=4
    100/125=0
    */
    let count = 0;
    let currentDivisor = 5;
    while(n >= currentDivisor)
    {
        count += Math.floor(n / currentDivisor);
        currentDivisor *= 5;
    }
    return count;
};