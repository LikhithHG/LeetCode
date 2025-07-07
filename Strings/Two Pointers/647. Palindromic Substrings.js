/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) 
{
    let ans = 0;

    for (let i = 0; i < s.length; ++i) 
    {
        // Odd-length palindromes (center at one character)
        ans += countPalindromesAroundCenter(s, i, i);

        // Even-length palindromes (center between two characters)
        ans += countPalindromesAroundCenter(s, i, i + 1);
    }

    return ans;    
};

function countPalindromesAroundCenter(s, lo, hi) 
{
    let ans = 0;

    while (lo >= 0 && hi < s.length) 
    {
        if (s[lo] !== s[hi]) 
            break;

        // expand
        lo--;
        hi++;
        ans++;
    }

    return ans;
}