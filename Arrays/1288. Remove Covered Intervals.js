/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) 
{
    //sort the intervals 
    //If start is same, interval with largest end value comes first else sort based on start value
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);

    let count = 0;
    let end;
    let prevEnd = 0;

    for(let interval of intervals)
    {
        end = interval[1];

        if(prevEnd < end)
        {
            count += 1;
            prevEnd = end;
        }
    }
    return count;
};