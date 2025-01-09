/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) 
{
    let n = preorder.length;
    if(n === 0)
        return null;
    
    let root = new TreeNode(preorder[0]);
    let stack = [root];

    for(let i = 1; i < n; i++)
    {
        let node = stack[stack.length - 1];
        let child = new TreeNode(preorder[i]);

        while(stack.length > 0 && stack[stack.length - 1].val < child.val)
            node = stack.pop();
        
        // Attach the child to the correct parent node
        if (node.val < child.val)
            node.right = child;
        else
            node.left = child;

        // Add the child to the stack
        stack.push(child);
    }
    return root;
};