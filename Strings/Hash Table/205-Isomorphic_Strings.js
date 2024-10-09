/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) 
{
    if(s.length !== t.length)
        return false;

    let mapS = {};
    let mapT = {};

    for(let i = 0; i < s.length; i++)
    {
        let charS = s[i];
        let charT = t[i];

        if(mapS[charS] && mapS[charS] !== charT)
            return false;

        if(mapT[charT] && mapT[charT] !== charS)
            return false;

        mapS[charS] = charT;
        mapT[charT] = charS;
    }
    return true;
};