/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) 
{
    const n = s.length;
    if (n % k !== 0)
        throw new Error("String length must be a multiple of k.");

    const substrings = [];
    let result = "";

    // Step 1: Divide string into substrings
    for (let i = 0; i < n; i += k) 
        substrings.push(s.slice(i, i + k));

    // Step 2: Process each substring
    for (const substring of substrings) 
    {
        let sum = 0;

        // Calculate sum of hash values of characters
        for (const char of substring)
            sum += char.charCodeAt(0) - 'a'.charCodeAt(0);

        // Find the hashed character
        const hashedChar = sum % 26;
        const hashedCharacter = String.fromCharCode('a'.charCodeAt(0) + hashedChar);

        // Append to result
        result += hashedCharacter;
    }

    return result;  
};