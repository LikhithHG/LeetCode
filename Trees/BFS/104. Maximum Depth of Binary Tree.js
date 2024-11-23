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
 * @return {number}
 */
var maxDepth = function(root) 
{
    //Iterative BFS
    if(!root)
        return 0;

    let queue = [root];
    let depth = 0;

    while(queue.length > 0)
    {
        let levelSize = queue.length;
        for(let i = 0; i < levelSize; i++)
        {
            const node = queue.shift();

            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        depth += 1;
    }
    return depth;
};
/*
Recursive DFS
if (!root) return 0; // Base case: empty tree

    // Recursively calculate the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The maximum depth is the larger of the two depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
*/