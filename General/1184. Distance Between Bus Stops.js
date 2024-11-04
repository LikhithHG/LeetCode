/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) 
{
    if (start > destination) 
        [start, destination] = [destination, start];

    // Calculate the direct path distance (clockwise)
    let directDistance = 0;
    for (let i = start; i < destination; i++) 
        directDistance += distance[i];

    // Calculate the total distance of the circular route
    const totalDistance = distance.reduce((acc, val) => acc + val, 0);

    // Calculate the alternative path distance (counterclockwise)
    const alternativeDistance = totalDistance - directDistance;

    // Return the minimum of the direct and alternative path distances
    return Math.min(directDistance, alternativeDistance);    
};