/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) 
{
    let result = [];
    let i = 0;
    //Pushing left intervals
    while(i < intervals.length && intervals[i][1] < newInterval[0])
    {
        result.push(intervals[i]);
        i++;
    }
    //Merging Intervals
    while(i < intervals.length && intervals[i][0] <= newInterval[1])
    {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    //Push the new Interval
    result.push(newInterval);

    //Pushing Right Intervals
    while(i < intervals.length)
    {
        result.push(intervals[i]);
        i++;
    }
    return result;
};