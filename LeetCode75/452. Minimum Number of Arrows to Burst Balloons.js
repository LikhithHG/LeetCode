/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) 
{
    if(!points || points.length === 0)
        return 0;
    
    //Sort based on the end values
    points.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let lastArrow = points[0][1];

    for(let i = 1; i < points.length; i++)
    {
        if(points[i][0] > lastArrow)
        {
            count += 1;
            lastArrow = points[i][1];
        }
    }
    return count;
};