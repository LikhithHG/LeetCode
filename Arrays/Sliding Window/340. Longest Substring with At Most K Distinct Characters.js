/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) 
{
    let n = s.length;
    let maxSize = 0;

    let counter = new Map();
    for(let right = 0; right < n; right++)
    {
        counter.set(s[right], (counter.get(s[right]) || 0) + 1);

        if(counter.size <= k)
            maxSize++;
        
        else
        {
            counter.set(s[right - maxSize], (counter.get(s[right - maxSize]) - 1));
            if(counter.get(s[right - maxSize]) === 0)
                counter.delete(s[right - maxSize]);
        }
    }
    return maxSize;
};

/*
    let n = s.length;
    let maxSize = 0;
    let left = 0;

    let counter = new Map();
    for(let right = 0; right < n; right++)
    {
        counter.set(s[right], (counter.get(s[right]) || 0) + 1);

        while(counter.size > k)
        {
            counter.set(s[left], counter.get(s[left]) - 1);
            if(counter.get(s[left]) === 0)
                counter.delete(s[left]);
            
            left++;
        }
        maxSize = Math.max(maxSize, right - left + 1);
    }
    return maxSize;
*/