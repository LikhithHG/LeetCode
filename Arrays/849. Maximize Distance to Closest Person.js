/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) 
{
    let last = -1;    
    let n = seats.length;
    let maxDist = 0;

    for(let i = 0; i < n; i++)
    {
        if(seats[i] === 1)
        {
            //first seat is empty
            if(last === -1)
                maxDist = i;
            else
                maxDist = Math.max(maxDist, Math.floor((i - last) / 2));
            last = i;
        }
    }
    //if last seat is empty
    if(seats[n - 1] === 0)
        maxDist = Math.max(maxDist, n - 1 - last);
    
    return maxDist;
};