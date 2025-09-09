/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) 
{
    //length of the string
    let n = s.length;
    //a matrix to store if a string starting from i and j is pallindrome
    let dp = Array.from({ length: n }, () => new Array(n).fill(false));

    //holds the first and last index of the last substring
    let answer = [0, 0];

    //Base Case 1: String with start and end index same is always pallindrome i.e with length 1
    for(let i = 0; i < n; i++)
        dp[i][i] = true;

    //Base Case 2: to check if dp[i][i+1] is true iff s[i] === s[i+1]
    for(let i = 0; i < n - 1; i++)
    {
        if(s[i] === s[i + 1])
        {
            dp[i][i + 1] = true;
            answer = [i, i + 1];
        }
    }

    //Recurrannce relation start with the strings of length 3
    for(let len = 3; len <= n; len++)
    {
        //start index of 0
        for(let i = 0; i <= n - len; i++)
        {
            //end index j
            let j = i + len - 1;

            if(s[i] === s[j] && dp[i + 1][j - 1])
            {
                dp[i][j] = true;
                answer = [i, j];
            }
        }
    }
    return s.slice(answer[0], answer[1] + 1);
}

/*
    //Check if the string is of 0 length
    if(s.length === 0)
        return 0;
    
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++)
    {
        //If the string is of odd length 
        let len1 = expandAround(i, i);

        //If the length of the string is even length
        let len2 = expandAround(i, i + 1);

        let len = Math.max(len1, len2);

        if(len > end - start)
        {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);


    function expandAround(left, right)
    {
        while(left >= 0 && right <= s.length && s[left] === s[right])
        {
            left -= 1;
            right += 1;
        }
        return right - left - 1;
    }
*/