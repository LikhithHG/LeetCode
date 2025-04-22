/**
 * @param {number[][]} peaks
 * @return {number}
 */
var visibleMountains = function(peaks) 
{
    const len = peaks.length;
    if(len == 1) 
        return 1;
    for(let i = 0; i < len; i++) 
        peaks[i] = [peaks[i][0] - peaks[i][1], peaks[i][0] + peaks[i][1]];
    
    peaks.sort((a, b) => a[0] - b[0] || b[1]-a[1]);

    let visiblePeaks = 0, rightMostPeak = -Infinity;

    for(let i=0; i<len; i++) 
    {
        if(peaks[i][1] > rightMostPeak) 
        {
            rightMostPeak = peaks[i][1];
            if(i < len-1 && (peaks[i][0] === peaks[i+1][0] && peaks[i][1] === peaks[i+1][1]))
                continue;
            visiblePeaks++;
        }
    }

    return visiblePeaks;
};