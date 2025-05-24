/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isReflected = function(points) 
{
    const pointSet = new Set();
    let minX = Infinity;
    let maxX = -Infinity;

    // Convert point array to string form and find min and max x values
    for (let [x, y] of points) 
    {
        pointSet.add(`${x},${y}`);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
    }

    const mid = (minX + maxX);

    for (let [x, y] of points) 
    {
        const reflectedX = mid - x;
        const reflectedPoint = `${reflectedX},${y}`;
        if (!pointSet.has(reflectedPoint)) 
            return false;
    }

    return true;    
};