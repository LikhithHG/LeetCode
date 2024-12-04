/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) 
{

    let lenS = s.length;
    let lenT = t.length;

    //Ensure that s is shorter than t
    //Swap the strings like shorter becomes string s
    if(lenS > lenT)
        return isOneEditDistance(t, s);

    //If len of strings grater than 1 false
    if(lenS - lenT > 1)
        return false;

    //Loop over the shorter string s
    for(let i = 0; i < lenS; i++)
    {
        if(s[i] != t[i])
        {
            //if the length of string is equal then the charater at that place should be replaced
            if(lenS === lenT)
                return s.slice(i + 1) === t.slice(i + 1);
            
            else
                return s.slice(i) === t.slice(i + 1);
        }
    }
    //If no difference found
    return lenS + 1 === lenT;
};