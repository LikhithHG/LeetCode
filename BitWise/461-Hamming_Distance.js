/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) 
{
    result = x ^ y;
    let count = 0;
    while(result != 0)
    {
        result = result & (result - 1);
        count = count + 1;
    }

    return count;
};