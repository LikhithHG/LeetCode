/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) 
{
    s = s.trim();
    words = s.split(/\s+/);

    let start = 0;
    let end = words.length - 1;

    while(start < end) 
    {
        let string = words[start];
        words[start] = words[end];
        words[end] = string;
        start += 1;
        end -= 1;
    } 

    //words.reverse(); 
    return words.join(' ');
};