/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function(root, target) 
{
    let ans = [null, null];
    if (!root) 
        return ans;
   
    let stack = [];
    let curr = root;
   
    // Find target by pushing nodes to stack
    while (curr) 
    {
        stack.push(curr);
        if (curr.val > target) 
           curr = curr.left;
        else 
           curr = curr.right; 
    }
   
    // Process stack backwards to split tree
    while (stack.length) 
    {
        curr = stack.pop();
        if (curr.val > target) 
        {
            curr.left = ans[1];
            ans[1] = curr;
        } 
        else 
        {
            curr.right = ans[0];
            ans[0] = curr;
        }
    }
   
    return ans;
};

/*
Recursive
    if (!root)
       return [null, null];
   
   if (root.val > target) 
   {
       let left = splitBST(root.left, target);
       root.left = left[1];
       return [left[0], root];
   } 
   else 
   {
       let right = splitBST(root.right, target);
       root.right = right[0]; 
       return [root, right[1]];
   } 
*/