/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) 
{
    const n = s.length;
    let lo = 0, hi = n;
    const ans = new Array(n + 1);

    for (let i = 0; i < n; i++) 
    {
        if (s[i] === 'I') 
            ans[i] = lo++;
        else 
            ans[i] = hi--;
    }

    ans[n] = lo;  // lo and hi will be equal here
    return ans;
};