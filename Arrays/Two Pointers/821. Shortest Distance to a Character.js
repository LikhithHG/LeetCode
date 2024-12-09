/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) 
{
     const n = s.length;
    const distances = Array(n).fill(Infinity);
    let prev = -Infinity;

    // Left to right pass
    for (let i = 0; i < n; i++) 
    {
        if (s[i] === c) 
        {
            prev = i;
        }
        distances[i] = i - prev;
    }

    // Right to left pass
    prev = Infinity;
    for (let i = n - 1; i >= 0; i--) 
    {
        if (s[i] === c) 
        {
            prev = i;
        }
        distances[i] = Math.min(distances[i], prev - i);
    }

    return distances;
};