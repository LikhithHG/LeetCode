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
 * @return {TreeNode}
 */
var convertBST = function(root) 
{
    //Morris Traversal - Inorder traversal without using any extra space
    //Uses the concept of threaded binary tree that temporarily modifies tree structure
    function getSuccessor(node)
    {
        let succ = node.right;
        while (succ.left !== null && succ.left !== node) 
            succ = succ.left;
        return succ;
    }

    let sum = 0;
    let node = root;

    while (node !== null) 
    {
        // If there is no right subtree, process this node and move to the left subtree.
        if (node.right === null) 
        {
            sum += node.val;
            node.val = sum;
            node = node.left;
        } 
        // If there is a right subtree, find the in-order successor.
        else 
        {
            let succ = getSuccessor(node);

            // If the successor's left is null, create a thread and move to the right subtree.
            if (succ.left === null) 
            {
                succ.left = node;
                node = node.right;
            } 
            // If the successor's left points to the current node, remove the thread and process this node.
            else 
            {
                succ.left = null;
                sum += node.val;
                node.val = sum;
                node = node.left;
            }
        }
    }

    return root;
};

/*
    //Reverse Inorder Traversal Right -> root -> Left
    let nodeSum = 0;
    let stack = [];
    let current = root;

    while(stack.length > 0 || current)
    {
        while(current)
        {
            stack.push(current);
            current = current.right;
        }
        current = stack.pop();
        nodeSum += current.val;
        current.val = nodeSum;

        current = current.left;
    }    
    return root;
*/