/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) 
{
    const freq = {};
    let maxFreq = -1;
    for (const e of s) 
    {
        freq[e] = (freq[e] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[e]);
    }

    const taken = {};
    const ans = [];
    for (let i = s.length - 1; i >= 0; i--) 
    {
        const e = s[i];
        if (!taken[e]) 
        {
            if (freq[e] === maxFreq) 
            {
                taken[e] = 1;
                ans.push(e);
            }
        }
  }
  return ans.reverse().join("");
};