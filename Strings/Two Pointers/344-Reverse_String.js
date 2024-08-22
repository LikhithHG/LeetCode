/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) 
{
    let low = 0;
    let high = s.length - 1;

    while(low <= high)
    {
        let char = s[low];
        s[low] = s[high];
        s[high] = char;
        low += 1;
        high -= 1;
    }
    return s;
};