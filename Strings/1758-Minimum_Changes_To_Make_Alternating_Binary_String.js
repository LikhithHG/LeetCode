/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) 
{
    let n = s.length;
    let pattern1Changes = 0; // Count changes to make it "010101..."
    let pattern2Changes = 0; // Count changes to make it "101010..."

    for (let i = 0; i < n; i++) 
    {
        // For Pattern 1 ("010101...")
        if (i % 2 === 0) 
        {
            if (s[i] !== '0') 
                pattern1Changes++; // Index is even, should be '0'
        } 
        else 
        {
            if (s[i] !== '1') 
                pattern1Changes++; // Index is odd, should be '1'
        }

        // For Pattern 2 ("101010...")
        if (i % 2 === 0) 
        {
            if (s[i] !== '1') 
                pattern2Changes++; // Index is even, should be '1'
        } 
        else 
        {
            if (s[i] !== '0') 
                pattern2Changes++; // Index is odd, should be '0'
        }
    }
    return Math.min(pattern1Changes, pattern2Changes);
};