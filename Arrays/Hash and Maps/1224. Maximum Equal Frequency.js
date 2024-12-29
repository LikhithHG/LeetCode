/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) 
{
    const count = new Map();  // number -> frequency
    const freq = new Map();   // frequency -> count of numbers with this frequency
    let maxFreq = 0;
    let maxLen = 0;
    
    for(let i = 0; i < nums.length; i++) 
    {
        const x = nums[i];
        
        // Get current count of x and update it
        const oldCount = count.get(x) || 0;
        count.set(x, oldCount + 1);
        
        // Update old frequency count
        if(oldCount > 0) 
        {
            freq.set(oldCount, (freq.get(oldCount) || 0) - 1);
            if(freq.get(oldCount) === 0) 
                freq.delete(oldCount);
        }
        
        // Update new frequency count
        const newCount = oldCount + 1;
        freq.set(newCount, (freq.get(newCount) || 0) + 1);
        maxFreq = Math.max(maxFreq, newCount);
        
        // Check if current prefix is valid
        let isValid = false;
        
        if(freq.size === 1) 
        {
            // Case 1: All numbers appear once
            isValid = maxFreq === 1;
            // Case 2: Only one number in prefix
            isValid = isValid || (freq.get(maxFreq) === 1);
        } 
        else if(freq.size === 2) 
        {
            // Case 3: One number appears once, rest appear maxFreq times
            isValid = (freq.get(1) === 1 && freq.get(maxFreq));
            // Case 4: One number appears maxFreq times, rest appear maxFreq-1 times
            isValid = isValid || (freq.get(maxFreq) === 1 && 
                                freq.get(maxFreq - 1) && 
                                freq.get(maxFreq - 1) * (maxFreq - 1) + maxFreq === i + 1);
        }
        
        if(isValid)
            maxLen = i + 1;
    }
    
    return maxLen;
};