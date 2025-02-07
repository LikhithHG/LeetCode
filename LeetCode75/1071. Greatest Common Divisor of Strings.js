/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) 
{
     // Helper function to find the GCD of two numbers
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Check if str1 + str2 is the same as str2 + str1
    if (str1 + str2 !== str2 + str1)
        return "";

    // Find the GCD of the lengths of str1 and str2
    const gcdLength = gcd(str1.length, str2.length);

    // Return the substring of str1 from 0 to gcdLength as the common divisor
    return str1.substring(0, gcdLength);    
};