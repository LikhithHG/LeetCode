/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) 
{
    let n = intervals.length;
    
    //Sorting the intervals preserving the original index
    let sorted = intervals.map((interval, index) => [interval[0], index]).sort((a, b) => a[0] - b[0]);

    const binarySearch = (target) => {
        let left = 0;
        let right = n - 1;

        while(left <= right)
        {
            let mid = Math.floor((left + right) / 2);
            if(sorted[mid][0] >= target)
                right = mid - 1;
            else
                left = mid + 1;
        }
        return left < n ? sorted[left][1] : -1;
    };

    return intervals.map(interval => binarySearch(interval[1]));
};