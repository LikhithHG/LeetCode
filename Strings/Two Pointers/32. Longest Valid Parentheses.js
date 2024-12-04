/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) 
{
    //Two pointers
    //Traverse left to right 
    let left = 0;
    let right = 0;
    let maxLen = 0;

    for(let i = 0; i < s.length; i++)
    {
        if(s[i] === '(')
            left += 1;
        else
            right += 1;
        
        if(left === right)
            maxLen = Math.max(maxLen, 2 * right);
        
        else if(right > left)
            left = right = 0;
    }
    left = right = 0;

    //Right to left
    for(let i = s.length - 1; i >= 0; i--)
    {
        if(s[i] === '(')
            left += 1;
        else
            right += 1;
        
        if(left === right)
            maxLen = Math.max(maxLen, 2 * left);
        else if(left > right)
            left = right = 0;
    }
    return maxLen;
};

/*
    const stack = [];
    let maxLen = 0;
    stack.push(-1);

    for(let i = 0; i < s.length; i++)
    {
        if(s[i] === '(')
            stack.push(i);

        else
        {
            stack.pop();
            if(stack.length === 0)
                stack.push(i);
            
            else
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
        }
    }
    return maxLen;
*/