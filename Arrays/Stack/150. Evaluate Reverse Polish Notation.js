/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) 
{
    const stack = [];

    //Push if it is a number else pop the 2 elements from top and do the operation and push the result to stack
    for(let token of tokens)
    {
        if(!isNaN(token))
            stack.push(parseInt(token, 10));
        else
        {
            const b = stack.pop();
            const a = stack.pop();
            switch(token)
            {
                case '+': stack.push(a + b);
                    break;
                case '-': stack.push(a - b);
                    break;
                case '*': stack.push(a * b);
                    break;
                case '/': stack.push(Math.trunc(a / b));
                    break;
            }
        }
    }
    return stack.pop();
};