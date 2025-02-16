/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) 
{
    let i = 0, res = 0;
    while (i < chars.length) 
    {
        let groupLength = 1;
        while (i + groupLength < chars.length && chars[i + groupLength] === chars[i]) 
            groupLength++;
        chars[res++] = chars[i];
        if (groupLength > 1) 
        {
            for (let c of groupLength.toString()) 
                chars[res++] = c;
        }
        i += groupLength;
    }
    return res;
};