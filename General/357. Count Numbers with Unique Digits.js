/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) 
{
    if(n === 0)
        return 1;

    //if n = 1 there are 10 possible numbers from 0 to 9
    let count = 10;

    //We will have unique digits until the length of digits in a number is 10
    //if length exceeds 10 then one or other digit must repeat
    let available = 9;
    let uniqueDigits = 9;

    for(let i = 2; i <= n && available > 0; i++)
    {
        uniqueDigits *= available;
        available--;
        count += uniqueDigits;
    }
    return count;
};