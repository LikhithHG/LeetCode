/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) 
{
    const result = new Set();
    let i = 0;

    while(Math.pow(x, i) <= bound)
    {
        let j = 0;
        while(Math.pow(x, i) + Math.pow(y, j) <= bound)
        {
            result.add(Math.pow(x, i) + Math.pow(y, j));
            if(y === 1)
                break;
            j++;
        }
        if(x === 1)
                break;
        i++;
    }
    return Array.from(result);
};