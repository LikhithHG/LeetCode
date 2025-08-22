/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) 
{
    let stack = []; // each element: { char, count }

    for (let i = 0; i < s.length; i++) 
    {
        const char = s[i];

        if (stack.length === 0 || stack[stack.length - 1].char !== char) 
            stack.push({ char: char, count: 1 });
        else 
        {
            stack[stack.length - 1].count += 1;
            if (stack[stack.length - 1].count === k) 
                stack.pop(); // remove the sequence
        }
    }

    // Rebuild the result string
    let result = '';
    for (let { char, count } of stack) 
        result += char.repeat(count);

    return result;    
};