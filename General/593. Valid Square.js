/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) 
{
    let distances = [
        distSqured(p1, p2),
        distSqured(p1, p3),
        distSqured(p1, p4),
        distSqured(p2, p3),
        distSqured(p2, p4),
        distSqured(p3, p4)
    ];
    distances.sort((a, b) => a - b);
    // Check if the first 4 distances (sides) are equal and greater than 0
    // and the last 2 distances (diagonals) are equal
    return distances[0] > 0 && distances[0] === distances[1] && 
           distances[1] === distances[2] && distances[2] === distances[3] &&
           distances[4] === distances[5];
};
function distSqured(p1, p2)
{
    return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
}