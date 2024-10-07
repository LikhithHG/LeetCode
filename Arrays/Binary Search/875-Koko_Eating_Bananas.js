/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) 
{
    let left = 0;
    let right = Math.max(...piles);

    var canFinish = function(k)
    {
        let hours = 0;
        for(let pile of piles)
        {
            hours += Math.ceil(pile/k);
        }
        return hours <= h;
    }

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);
        
        if(canFinish(mid))
            right = mid;
        
        else
            left = mid + 1;        
    }
    return left;
};