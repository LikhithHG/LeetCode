/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) 
{
    g.sort((a, b) => a - b);  
    s.sort((a, b) => a - b);  

    let numContentChildren = 0;
    let cookieIndex = 0;

    while(cookieIndex < s.length && numContentChildren < g.length)
    {
        if(s[cookieIndex] >= g[numContentChildren])
            numContentChildren++;
        cookieIndex++;
    }
    return numContentChildren;
};