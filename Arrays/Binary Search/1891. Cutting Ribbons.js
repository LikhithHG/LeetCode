/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) 
{
    let left = 0;
    //Math.max() expects individual numbers as arguments, not an array. So Spread Operator.
    let right = Math.max(...ribbons);

    //Binary search
    while(left < right)
    {
        let mid = Math.ceil((left + right) / 2);

        if(isPossible(mid, ribbons, k))
            left = mid;
        else
            right = mid - 1;
    }
    return left;
};

function isPossible(middle, ribbons, k)
{
    let totalRibbons = 0;
    for(let ribbon of ribbons)
    {
        totalRibbons += Math.floor(ribbon / middle);
        if(totalRibbons >= k)
            return true;
    }
    return false;
}