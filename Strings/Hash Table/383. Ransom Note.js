/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) 
{
    
    let hashMap = new Map();
    for (const c of magazine) 
    {
        const currentCount = hashMap.get(c) || 0;
        hashMap.set(c, currentCount + 1);
    }

    for(const c of ransomNote)
    {
        const count = hashMap.get(c) || 0;
        if(count === 0)
            return false;
        hashMap.set(c, count - 1);
    }
    return true;
};