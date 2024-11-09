/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) 
{
    let [x1, y1] = coordinates[0];
    let [x2, y2] = coordinates[1];

    //Calculate the slope components of first 2 points
    let dx = x2 - x1;
    let dy = y2 - y1;

    for(let i = 2; i < coordinates.length; i++)
    {
        let [x3, y3] = coordinates[i];

        if(dx * (y3 - y1) !== dy * (x3 - x1))
            return false;
    }
    return true;
};