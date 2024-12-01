/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) 
{
    //Hash and Divide & Conquer
    //If any character that appears less than k times in the string then that string cannont be part of the substring
    //do the count of charaters in first scan
    function helper(start, end)
    {
        //If the length of the substring is less than k
        if(end - start < k)
            return 0;
        //count the characters in the string
        const freq = {};
        for(let i = start; i < end; i++)
            freq[s[i]] = (freq[s[i]] || 0) + 1;
        
        //Loop the string again and check if the character count is less than k split it
        for(let i = start; i < end; i++)
        {
            if(freq[s[i]] < k)
            {
                //Find next valid string
                let mid = i + 1;
                //To check if the next character is valid
                while(mid < end && s[mid] < k)
                    mid += 1;
                //Divide it into 2 strings
                let left = helper(start, i);
                let right = helper(mid, end);
                return Math.max(left, right);
            }
        }
        //It is returned only if the entire string is valid
        return end - start;
    }
    //Pass the values start and end to the helper function
    return helper(0, s.length);
};