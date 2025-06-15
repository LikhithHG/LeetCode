/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) 
{
    const ans = [];
    let i = 0, j = 0;

    while (i < firstList.length && j < secondList.length) 
    {
        // Find the intersection between A[i] and B[j]
        const lo = Math.max(firstList[i][0], secondList[j][0]);
        const hi = Math.min(firstList[i][1], secondList[j][1]);

        if (lo <= hi) 
            ans.push([lo, hi]);

        // Move the pointer that has the smaller endpoint
        if (firstList[i][1] < secondList[j][1]) 
            i++;
        else 
            j++;
    }

    return ans;    
};