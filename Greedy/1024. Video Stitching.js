/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) 
{
    clips.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let end = 0;
    let farthest = 0;
    let i = 0;

    while(i < clips.length && end < time)
    {
        // If the current clip starts after the current end, it's impossible to cover the interval
        if(clips[i][0] > end)
            return -1;

        while(i < clips.length && clips[i][0] <= end)
        {
            farthest = Math.max(farthest, clips[i][1]);
            i++;
        }
        //Use one more clip and update the current end to the farthest we can reach
        count += 1;
        end = farthest;

        //If we've covered the interval up to or beyond T, return the number of clips used
        if(end >= time)
            return count;
    }
    return -1;
};