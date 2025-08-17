/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
var minDistance = function(height, width, tree, squirrel, nuts) 
{
    if (!nuts || nuts.length === 0) 
        return 0;

    const dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

    let total = 0;
    let bestDelta = -Infinity;

    for (const nut of nuts) 
    {
        const toTree = dist(nut, tree);
        const toSquirrel = dist(nut, squirrel);
        total += 2 * toTree;                 // round trip from tree to nut and back
        bestDelta = Math.max(bestDelta, toTree - toSquirrel); // savings on first trip
    }

    return total - bestDelta;    
};