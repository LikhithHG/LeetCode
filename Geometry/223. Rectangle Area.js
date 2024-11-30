/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) 
{
    const area1 = (ax2 - ax1) * (ay2 - ay1);
    const area2 = (bx2 - bx1) * (by2 - by1);
    
    //Overlaping width and height
    const overLapWidth = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    const overLapHeight = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
    const overLapArea = overLapWidth * overLapHeight;

    return area1 + area2 - overLapArea;
};