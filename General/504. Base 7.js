/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) 
{
    if(num === 0)
        return '0';

    let isNegative = num < 0;
    num = Math.abs(num);

    let base7 = '';

    while(num > 0)
    {
        base7 = (num % 7) + base7;
        num = Math.floor(num / 7);
    }

    return isNegative ? '-' + base7 : base7;
};