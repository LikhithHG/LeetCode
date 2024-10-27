/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) 
{
    let totalTime = 0;

    for(let i = 1; i < points.length; i++)
    {
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];

        let distX = Math.abs(x2 - x1);
        let distY = Math.abs(y2 - y1);

        totalTime += Math.max(distX, distY);
    }    
    return totalTime;
};