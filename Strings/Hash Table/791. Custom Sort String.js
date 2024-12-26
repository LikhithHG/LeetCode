/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) 
{
    // Step 1: Build a frequency map for `s`
    const freq = new Map();
    for (let char of s) 
        freq.set(char, (freq.get(char) || 0) + 1);

    // Step 2: Build the result string based on `order`
    let result = "";
    for (let char of order) 
    {
        while (freq.get(char) > 0) 
        {
            result += char;
            freq.set(char, freq.get(char) - 1);
        }
    }

    // Step 3: Append remaining characters not in `order`
    for (let [char, count] of freq) 
    {
        while (count > 0) 
        {
            result += char;
            count--;
        }
    }

    return result;
};

/*
    //Custom comparator
    // Step 1: Count the frequency of each character in `s`
    const count = new Array(26).fill(0);
    for (let char of s)
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    // Step 2: Build the result string based on `order`
    let result = "";
    for (let char of order) 
    {
        while (count[char.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) 
        {
            result += char;
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
    }

    // Step 3: Append the remaining characters not in `order`
    for (let i = 0; i < 26; i++) 
    {
        while (count[i] > 0) 
        {
            result += String.fromCharCode(i + 'a'.charCodeAt(0));
            count[i]--;
        }
    }

    return result;  

*/