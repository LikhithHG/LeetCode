/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) 
{
    let low = 0;
    let high = num;

    while(low <= high)
    {
        let mid = Math.floor((low + high) / 2);
        let res = mid * mid;

        if(res === num)
            return true;
        
        else if(res > num)
            high = mid - 1;

        else
            low = mid + 1;
    }  

    return false;
};