/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) 
{
    let total = 0;
    let start = 1;

    for(let day = 1; day <= n; day++)
    {
        total += start + (day - 1) % 7;
        if(day % 7 === 0)
            start += 1;
    }
    return total;
};