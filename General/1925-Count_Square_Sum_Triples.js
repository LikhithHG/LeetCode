/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) 
{
    let count = 0;
    
    // Iterate over c (the hypotenuse)
    for (let c = 1; c <= n; c++) 
    {
        // Iterate over a
        for (let a = 1; a < c; a++) 
        {
            // Calculate b^2 = c^2 - a^2
            let bSquared = c * c - a * a;
            let b = Math.sqrt(bSquared);
            
            // Check if b is a perfect square and b <= n
            if (Number.isInteger(b) && b <= n) 
            {
                count++;
            }
        }
    }
    return count;
};