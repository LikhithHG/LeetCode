/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) 
{
    let left = 1;
    let right = n;

    let totalSum = (n * (n + 1)) / 2;

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);

        if(mid * mid < totalSum)
            left = mid + 1;
        
        else
            right = mid;
    }
    if(left * left === totalSum)
        return left;
    else
        return -1;
};

/*
    //Using Prefix Sum
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
*/