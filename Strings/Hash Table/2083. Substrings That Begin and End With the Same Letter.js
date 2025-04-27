/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) 
{
    let n = s.length;
    let answer = 0;
    let prefixCount = Array(26).fill(0);

    for(let i = 0; i < n; i++)    
    {
        let idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        prefixCount[idx]++;
        answer += prefixCount[idx];
    }
    return answer;
};