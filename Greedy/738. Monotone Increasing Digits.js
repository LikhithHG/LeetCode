/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) 
{
    const digits = String(n).split('').map(Number);
    let marker = digits.length;

    // Traverse the digits from the end to find the first decreasing point
    for (let i = digits.length - 1; i > 0; i--) 
    {
        if (digits[i] < digits[i - 1]) 
        {
            // Set the marker for where digits need to become 9
            marker = i;
            // Decrease the previous digit
            digits[i - 1]--;
        }
    }

    // Set all digits after the marker to 9
    for (let i = marker; i < digits.length; i++) 
        digits[i] = 9;

    // Convert digits back to a number
    return parseInt(digits.join(''), 10);    
};