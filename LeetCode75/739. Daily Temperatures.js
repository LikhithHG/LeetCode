/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) 
{
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // Stack to store indices of the temperatures array

    for (let i = 0; i < n; i++) 
    {
        // Check if the current temperature is warmer than the temperature at the index on top of the stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) 
        {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex; // Calculate the number of days to wait
        }
        stack.push(i); // Push the current index onto the stack
    }

    return answer;
};