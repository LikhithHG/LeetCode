/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) 
{
     const timeInMinutes = timePoints.map(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }).sort((a, b) => a - b);

    let minDiff = Number.MAX_VALUE;

    // Calculate the difference between consecutive time points
    for (let i = 1; i < timeInMinutes.length; i++) 
        minDiff = Math.min(minDiff, timeInMinutes[i] - timeInMinutes[i - 1]);
    
    // Calculate the circular difference between the first and last time points
    const circularDiff = 1440 - (timeInMinutes[timeInMinutes.length - 1] - timeInMinutes[0]);
    minDiff = Math.min(minDiff, circularDiff);

    return minDiff;    
};