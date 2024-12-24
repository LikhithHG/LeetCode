/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) 
{
    //character count of each string and store it in a hash table
    if (strs.length == 0) 
        return [];
    //Create an object to store the anagrams as key value pairs
    let ans = {};
    //Iterate through each string
    for (let s of strs) 
    {
        let count = Array(26).fill(0);
        //For each character in a string calculate the frequecy
        for (let c of s) 
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        //Create a key to be stored in object using frequency values of each characer along with a delimeter as '#'
        //For anagrams it will create a same key
        let key = "";
        for (let i = 0; i < 26; i++) 
        {
            key += "#";
            key += count[i];
        }
        //If the key does not already exist in the ans object, initialize it as an empty array.
        //Add the current string s to the group corresponding to its key.
        if (!ans[key]) 
            ans[key] = [];
        ans[key].push(s);
    }
    return Object.values(ans);
};