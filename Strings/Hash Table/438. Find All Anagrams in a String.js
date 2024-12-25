/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) 
{
    function arraysEqual(arr1, arr2) 
    {
        for (let i = 0; i < arr1.length; i++) 
        {
            if (arr1[i] !== arr2[i]) 
                return false;
        }
        return true;
    }
    
    const ns = s.length
    let np = p.length;
    
    if (ns < np) 
        return []; // Return an empty array if `s` is shorter than `p`

    const pCount = new Array(26).fill(0); // Frequency array for `p`
    const sCount = new Array(26).fill(0); // Frequency array for the current window in `s`
    const output = []; // To store the starting indices of anagrams

    // Build the frequency array for `p`
    for (let char of p)
        pCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // Sliding window over `s`
    for (let i = 0; i < ns; i++) 
    {
        // Add the current character to the sliding window
        sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        // Remove the character that is sliding out of the window
        if (i >= np)
            sCount[s[i - np].charCodeAt(0) - 'a'.charCodeAt(0)]--;

        // Compare the frequency arrays
        if (arraysEqual(pCount, sCount))
            output.push(i - np + 1); // Add the starting index of the current anagram
    }

    return output;
};