/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) 
{
    let lastSpaceIndex = -1; // Initialize lastSpaceIndex to -1
    let result = ""; // To store the final result

    // Traverse through each character of the string
    for (let strIndex = 0; strIndex <= s.length; strIndex++) 
    {
        // If we encounter a space or the end of the string
        if (strIndex === s.length || s[strIndex] === ' ') 
        {
            // Mark the start and end index of the current word
            let startIndex = lastSpaceIndex + 1;
            let endIndex = strIndex - 1;

            // Reverse the current word using the two pointer approach
            while (startIndex < endIndex) 
            {
                // Swap the characters
                let temp = s[startIndex];
                s = s.substring(0, startIndex) + s[endIndex] + s.substring(startIndex + 1, endIndex) + temp + s.substring(endIndex + 1);
                startIndex++;
                endIndex--;
            }

            // Add the reversed word (or space if it's the last word)
            if (strIndex < s.length) 
                result += s.substring(lastSpaceIndex + 1, strIndex) + " ";
            else 
                result += s.substring(lastSpaceIndex + 1, strIndex);

            // Update lastSpaceIndex to the current space character
            lastSpaceIndex = strIndex;
        }
    }
    return result.trim(); // Remove any trailing spaces
};