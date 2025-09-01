/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) 
{
    const stack = [];

    for (const op of operations) 
    {
        if (op === "+") 
        {
            const top = stack[stack.length - 1];
            const newTop = top + stack[stack.length - 2];
            stack.push(newTop);
        } 

        else if (op === "C") 
            stack.pop();

        else if (op === "D") 
            stack.push(2 * stack[stack.length - 1]);
        
        else 
            stack.push(parseInt(op));
    }

    return stack.reduce((a, b) => a + b, 0);
};