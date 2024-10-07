/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) 
{
    let left = Math.max(...weights);
    let right = weights.reduce((acc, weight) => acc + weight, 0);

    var canLoad = function(capacity)
    {
        let day = 1;
        let currentCapacity = 0;
        for(let weight of weights)
        {
            if(currentCapacity + weight > capacity)
            {
                day += 1;
                currentCapacity = 0;
            }
            currentCapacity += weight;
        }
        return day <= days;
    }

    while(left < right)
    {
        let mid = Math.floor((left + right) / 2);
        
        if(canLoad(mid))
            right = mid;
        
        else
            left = mid + 1;        
    }
    return left;
};