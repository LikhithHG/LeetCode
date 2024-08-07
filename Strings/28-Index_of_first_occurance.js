/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) 
{
    let ans = 0
    let n = haystack.length
    let m = needle.length
    let flag = 0
    if(n < m)
        return -1
    
    for(let i = 0; i < n-m+1; i++)
    {
        if(haystack.substring(i, i+m) === needle && !flag)
        {
            ans = i
            flag = 1
            break
        }
    }
    if(flag)
        return ans
    
    else 
        return -1
};