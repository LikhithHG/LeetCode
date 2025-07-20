/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) 
{
    const stack1 = [];
    const stack2 = [];
    const output = [];

    while (root1 !== null || root2 !== null || stack1.length > 0 || stack2.length > 0) 
    {
        // Traverse the left children
        while (root1 !== null) 
        {
            stack1.push(root1);
            root1 = root1.left;
        }
        while (root2 !== null) 
        {
            stack2.push(root2);
            root2 = root2.left;
        }

        // Compare the top values and proceed
        const node1 = stack1.length > 0 ? stack1[stack1.length - 1] : null;
        const node2 = stack2.length > 0 ? stack2[stack2.length - 1] : null;

        if (node2 === null || (node1 !== null && node1.val <= node2.val)) 
        {
            root1 = stack1.pop();
            output.push(root1.val);
            root1 = root1.right;
        } 
        else 
        {
            root2 = stack2.pop();
            output.push(root2.val);
            root2 = root2.right;
        }
    }

    return output;
};