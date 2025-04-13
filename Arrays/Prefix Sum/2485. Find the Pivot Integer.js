/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) 
{
    let left = 1;
    let right = n;

    let sumLeft = left;
    let sumRight = right;

    if(n === 1)
        return n;
    
    while(left < right)
    {
        if(sumLeft < sumRight)
        {
            sumLeft += left + 1;
            left += 1;
        }
        else
        {
            sumRight += right - 1;
            right -= 1;
        }

        if(sumLeft === sumRight && left + 1 === right - 1)
            return left + 1;
    }
    return -1;
};