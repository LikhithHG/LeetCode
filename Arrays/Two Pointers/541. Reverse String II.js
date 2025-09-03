/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) 
{
    let a = s.split('');
    
    for (let start = 0; start < a.length; start += 2 * k) 
    {
        let i = start;
        let j = Math.min(start + k - 1, a.length - 1);
        
        while (i < j) 
        {
            // Swap characters at i and j
            [a[i], a[j]] = [a[j], a[i]];
            i++;
            j--;
        }
    }
    
    return a.join('');  
};