/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) 
{
    //Start based on the start values
    intervals.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < intervals.length - 1; i++)
    {
        if(intervals[i][1] > intervals[i + 1][0])
            return false;
    }
    return true;
};