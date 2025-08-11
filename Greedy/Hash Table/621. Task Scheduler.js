/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) 
{
    const freq = new Array(26).fill(0);
    let maxCount = 0;

    // Count frequency of each task
    for (const task of tasks) 
    {
        const index = task.charCodeAt(0) - 'A'.charCodeAt(0);
        freq[index]++;
        maxCount = Math.max(maxCount, freq[index]);
    }

    // Calculate the total time based on the most frequent task
    let time = (maxCount - 1) * (n + 1);
    for (const f of freq) 
    {
        if (f === maxCount) 
            time++;
    }

    // Return the max of calculated time and number of tasks
    return Math.max(tasks.length, time);
};