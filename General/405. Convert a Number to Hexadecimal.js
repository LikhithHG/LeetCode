/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) 
{
    if (num === 0) 
        return "0"; // Edge case for 0
    
    // Hexadecimal characters
    const hexChars = "0123456789abcdef"; 
    let result = "";

    // Handle negative numbers with two's complement
    if (num < 0) 
        num += 2 ** 32;

    while (num > 0) 
    {
        let hexDigit = num & 15; // Extract the last 4 bits (a nibble)
        result = hexChars[hexDigit] + result; // Map to hex character and prepend
        num = num >>> 4; // Unsigned Right shift by 4 bits
    }

    return result;
};