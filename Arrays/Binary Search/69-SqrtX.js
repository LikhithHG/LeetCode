/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) 
{
    let low = 0;
    let high = x;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        let res = mid * mid;

        if(res === x)
            return mid;
        
        else if(res > x)
            high = mid - 1;
        
        else
            low = mid + 1;

    }
    return high;
};

