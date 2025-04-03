/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) 
{
    let stack = [];
    let indexToRemove = new Set();

    for(let i = 0; i < s.length; i++)
    {
        if(s[i] === '(')
            stack.push(i);
        else if(s[i] === ')')
        {
            if(stack.length === 0)
                indexToRemove.add(i);
            else
                stack.pop();
        }
    }

    //add the elements in the stack 
    while(stack.length > 0)
        indexToRemove.add(stack.pop());
    
    let result = '';
    for(let i = 0; i < s.length; i++)
    {
        if(!indexToRemove.has(i))
            result += s[i];
    }
    return result;
};