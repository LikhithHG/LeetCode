/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) 
{
    let boomerangs = 0;

    // Loop through each point as the "center"
    for (let i = 0; i < points.length; i++) 
    {
        const distances = new Map(); // Map to store distances from point `i`

        for (let j = 0; j < points.length; j++) 
        {
            if (i === j) 
                continue; // Skip the same point

            // Calculate squared distance (no need for square root to save computation)
            const dx = points[i][0] - points[j][0];
            const dy = points[i][1] - points[j][1];
            const distance = dx * dx + dy * dy;

            // Increment the frequency of this distance
            distances.set(distance, (distances.get(distance) || 0) + 1);
        }

        // Calculate the number of boomerangs for this point
        for (let count of distances.values()) 
        {
            if (count > 1)
                boomerangs += count * (count - 1); // Permutation: P(count, 2) = count * (count - 1)
        }
    }

    return boomerangs;    
};