/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) 
{
    if(!s || !t || s.length < t.length)
        return "";

    const freqT = new Map();
    for(const char of t)
        freqT.set(char, (freqT.get(char) || 0) + 1);

    //The number of unique characters in t
    let required = freqT.size;  
    //How many characters in t are satisfied in the current window
    let formed = 0;

    let windowCount = new Map();
    let l = r = 0;
    let minLen = Infinity;
    //Stores start and end indices of minimum window
    let result = [0, 0];

    while(r < s.length)
    {
        const rightChar = s[r];
        windowCount.set(rightChar, (windowCount.get(rightChar) || 0) + 1);

        //if current character satisfies
        if(freqT.has(rightChar) && windowCount.get(rightChar) === freqT.get(rightChar))
            formed++;

        //Contract the window
        while(l <= r && formed === required)
        {
            //Update the result
            if(r - l + 1 < minLen)
            {
                minLen = r - l + 1;
                result = [l, r];
            }
            const leftChar = s[l];
            windowCount.set(leftChar, windowCount.get(leftChar) - 1);
            if(freqT.has(leftChar) && windowCount.get(leftChar) < freqT.get(leftChar))
                formed--;

            l++;
        }
        r++;
    }

    return minLen === Infinity ? "" : s.substring(result[0], result[1] + 1);
};