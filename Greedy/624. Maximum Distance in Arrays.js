/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) 
{
    let minOfAll = arrays[0][0];
    let maxOfAll = arrays[0][arrays[0].length - 1];
    let maxDistance = 0;

    for(let i = 1; i < arrays.length; i++)
    {
        let currentMin = arrays[i][0];
        let currentMax = arrays[i][arrays[i].length - 1];

        maxDistance = Math.max(maxDistance, Math.abs(maxOfAll - currentMin), Math.abs(currentMax - minOfAll));

        minOfAll = Math.min(minOfAll, currentMin);
        maxOfAll = Math.max(maxOfAll, currentMax);
    }  
    return maxDistance; 
};