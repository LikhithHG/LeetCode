/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) 
{

    function reverse(string, left, right)
    {
        while(left < right)
        {
            [string[left], string[right]] = [string[right], string[left]];
            left += 1;
            right -= 1;
        }
    }
    function reverseEachWord(string)
    {
        let n = string.length;
        let start = 0;
        for(let end = 0; end < n; end++)
        {
            if(s[end] === ' ')
            {
                reverse(string, start, end - 1);
                start = end + 1;
            }            
        }
        //Last word
        reverse(string, start, n - 1);
    }
   

    //reverse the entire string
    reverse(s, 0, s.length - 1);
    reverseEachWord(s);

};