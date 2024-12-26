/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) 
{
    const last = new Array(26).fill(0);
    const partitions = [];
    
    // Record the last occurrence of each character
    for (let i = 0; i < s.length; i++)
        last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;

    let j = 0; //Tracks the farthest point any character in the current partition can reach. 
    let anchor = 0; //Tracks the start of the current partition.

    // Partition the string
    for (let i = 0; i < s.length; i++) 
    {
        j = Math.max(j, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i === j) 
        {
            partitions.push(i - anchor + 1);
            anchor = i + 1;
        }
    }

    return partitions;    
};