/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) 
{
    let i = 0;
    let minLimit = -Infinity;

    for(let num of preorder)
    {
        while(i > 0 && preorder[i - 1] < num)
        {
            minLimit = preorder[i - 1];
            i--;
        }
        
        if(num <= minLimit)
            return false;
        
        preorder[i] = num;
        i++;
    }
    return true;
};

/*
let stack = [];
    let minLimit = -Infinity;

    for(let num of preorder)
    {
        while(stack.length > 0 && stack[stack.length - 1] < num)
            minLimit = stack.pop();
        
        if(num <= minLimit)
            return false;
        
        stack.push(num);
    }
    return true;
*/