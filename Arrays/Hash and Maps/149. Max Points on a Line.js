/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) 
{
    let n = points.length;
    if(n === 1)
        return 1;
    
    let result = 2;
    for(let i = 0; i < n; i++)
    {
        let count = {};
        for(let j = 0; j < n; j++)
        {
            if(i !== j)
            {
                //atan2 is the measure of angle from positive x-axis and the ray from the origin to that point
                let key = Math.atan2(points[j][1] - points[i][1], points[j][0] - points[i][0]);
                count[key] = count[key] ? count[key] + 1 : 1;
            }
        }
        result = Math.max(result, Math.max(...Object.values(count)) + 1);
    }
    return result;
};