/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) 
{
    if(timeSeries.length === 0)
        return 0;
    let totTime = 0;
    for(let i = 0; i < timeSeries.length - 1; i++)
        totTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    
    totTime += duration;

    return totTime;
};