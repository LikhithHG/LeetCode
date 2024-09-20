/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) 
{
    let n = s.length;
    let left = 0;
    let maxLength = 0;
    let charIndexMap = new Map();  // Stores the latest index of each character

    for (let right = 0; right < n; right++) {
        const char = s[right];
        
        // If we find a repeating character and it's inside the current window
        if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
            // Move the left pointer to the right of the last occurrence of the repeating character
            left = charIndexMap.get(char) + 1;
        }

        // Update the latest index of the current character
        charIndexMap.set(char, right);
        
        // Calculate the current window length and update the max length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};