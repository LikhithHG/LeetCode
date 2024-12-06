/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) 
{
    let n = s.length;
    if(n < 3)
        return n;

    let maxLen = 2;
    let left = right = 0;
    //key and the index of the character
    let hashmap = {};

    while(right < n)
    {
        hashmap[s[right]] = right++;

        //Check if there are only 2 values in the hashmap
        if(Object.keys(hashmap).length === 3)
        {
            //Delete the leftmost key and its value
            let del_index = Math.min(...Object.values(hashmap));
            delete hashmap[s[del_index]];

            //Move left index
            left = del_index + 1;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
};