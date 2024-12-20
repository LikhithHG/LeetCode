/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) 
{
    //Find the pattern
    let count = 0; // To store the total count of digit '1'

    for (let i = 1; i <= n; i *= 10) 
    {
        const divider = i * 10; 
        // Split the number into high, current, and low parts
        count += Math.floor(n / divider) * i + Math.min(Math.max(n % divider - i + 1, 0), i);
    }

    return count;
};