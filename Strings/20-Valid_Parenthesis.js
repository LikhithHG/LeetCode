/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) 
{
    const stack = []
    const mapping = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(i = 0; i < s.length; i++)
    {
        const char = s[i];

        if(char === '(' || char === '{' || char === '[')
            stack.push(char)

        else if(char === ')' || char === '}' || char === ']')
        {
            if(stack.length === 0 || stack.pop() !== mapping[char])
                return false
        }
    }

    return stack.length === 0;
};