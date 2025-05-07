/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) 
{
    const stack = [];
    let operand = 0;
    let result = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) 
    {
        const ch = s[i];

        if (!isNaN(parseInt(ch))) 
            // Forming the operand, could be multiple digits
            operand = operand * 10 + parseInt(ch);
        else if (ch === '+') 
        {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } 
        else if (ch === '-') 
        {
            result += sign * operand;
            sign = -1;
            operand = 0;
        } 
        else if (ch === '(') 
        {
            // Push the current result and sign
            stack.push(result);
            stack.push(sign);
            // Reset for new expression
            result = 0;
            sign = 1;
        } 
        else if (ch === ')') 
        {
            result += sign * operand;
            result *= stack.pop(); // Pop sign
            result += stack.pop(); // Pop previous result
            operand = 0;
        }
        // Ignore whitespace
    }

    return result + (sign * operand);    
};