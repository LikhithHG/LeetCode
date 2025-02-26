/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) 
{
    // strOne = s.toLowerCase();
    // strTwo = t.toLowerCase();
    
    // if (strOne.length !== strTwo.length) 
    //   return false;
    
    // const sortedStrOne = strOne.split('').sort().join('');
    // const sortedStrTwo = strTwo.split('').sort().join('');
    
    // return sortedStrOne === sortedStrTwo;

    if(s.length !== t.length)
        return false;
    
    let counter = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++)
    {
        counter[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        counter[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for(let count of counter)
    {
        if(count !== 0)
            return false;
    }

    return true;
};