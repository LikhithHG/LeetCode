/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) 
{
    // Array to store the maximum frequency of each character across all strings in words2
    let bmax = new Array(26).fill(0);

    // Calculate bmax by iterating through words2
    for (let b of words2) 
    {
        let bCount = count(b);
        for (let i = 0; i < 26; i++) 
            bmax[i] = Math.max(bmax[i], bCount[i]);
    }
    // List to store universal strings from words1
    let ans = []; 

    // Iterate through words1 to find universal strings
    for (let a of words1) 
    {
        let aCount = count(a);
        let isUniversal = true;

        for (let i = 0; i < 26; i++) 
        {
            if (aCount[i] < bmax[i]) 
            {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) 
            ans.push(a); // Add to the result if all conditions are satisfied
    }

    return ans; // Return the list of universal strings
};
function count(string) 
{
    let ans = new Array(26).fill(0); // Initialize an array of size 26 with zeros

    for (let c of string) 
        ans[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; // Increment frequency based on character position

    return ans;
}