/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) 
{
    if(s.length === 0)
        return "";
    
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++)
    {
        //Odd length
        let len1 = expandAround(s, i, i);
        //Even length
        let len2 = expandAround(s, i, i + 1);

        let len = Math.max(len1, len2);

        //To check if length is grater than previous pallindrome length
        if(len > end - start)
        {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor((len) / 2);
        }
    }
    return s.substring(start, end + 1);
};
var expandAround = function(s, left, right)
{
    while(left >= 0 && right < s.length && s[left] === s[right])
    {
        left -= 1;
        right += 1;
    }
    return (right - left - 1);
}