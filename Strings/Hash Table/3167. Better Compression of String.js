/**
 * @param {string} compressed
 * @return {string}
 */
var betterCompression = function(compressed) 
{
    // Create a map to store character frequencies
    const freqMap = new Map();
    
    // Parse the compressed string
    let i = 0;
    while (i < compressed.length) 
    {
        // Get the character
        const char = compressed[i];
        i++;
        
        // Get the number
        let num = '';
        while (i < compressed.length && !isNaN(compressed[i])) 
        {
            num += compressed[i];
            i++;
        }
        
        // Convert num to integer and add to frequency map
        const frequency = parseInt(num);
        freqMap.set(char, (freqMap.get(char) || 0) + frequency);
    }
    
    // Create the better compressed string
    // Sort characters alphabetically and build the result
    return Array.from(freqMap.entries())
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([char, freq]) => char + freq)
        .join('');
};