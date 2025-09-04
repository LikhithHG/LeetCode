/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) 
{
    if (s1.length > s2.length) 
        return false;

    const s1arr = new Array(26).fill(0);
    const s2arr = new Array(26).fill(0);

    const aCharCode = 'a'.charCodeAt(0);

    // Populate initial frequency arrays
    for (let i = 0; i < s1.length; i++) 
    {
        s1arr[s1.charCodeAt(i) - aCharCode]++;
        s2arr[s2.charCodeAt(i) - aCharCode]++;
    }

    let count = 0;
    for (let i = 0; i < 26; i++) 
        if (s1arr[i] === s2arr[i]) count++;

    for (let i = 0; i < s2.length - s1.length; i++) 
    {
        if (count === 26) 
            return true;

        const r = s2.charCodeAt(i + s1.length) - aCharCode;
        const l = s2.charCodeAt(i) - aCharCode;

        s2arr[r]++;

        if (s2arr[r] === s1arr[r]) 
            count++;

        else if (s2arr[r] === s1arr[r] + 1) 
            count--;

        s2arr[l]--;

        if (s2arr[l] === s1arr[l]) 
            count++;
            
        else if (s2arr[l] === s1arr[l] - 1) 
            count--;
    }

    return count === 26;
};