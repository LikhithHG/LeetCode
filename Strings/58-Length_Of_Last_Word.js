/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) 
{
    s = s.trimEnd();//To remove the white spaces at the end
    const myString = s.split(" ");
    
    let last = myString[myString.length - 1];
    return last.length;
    
};