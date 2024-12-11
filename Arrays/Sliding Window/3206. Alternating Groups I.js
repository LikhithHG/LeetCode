/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) 
{
    const n = colors.length;
    let count = 0;

    for (let i = 0; i < n; i++) 
    {
        const prev = colors[(i - 1 + n) % n]; // Previous tile (wrap around using modulo)
        const curr = colors[i];              // Current tile
        const next = colors[(i + 1) % n];    // Next tile (wrap around using modulo)

        // Check if the current tile forms an alternating group
        if (curr !== prev && curr !== next) 
        {
            count++;
        }
    }

    return count;    
};