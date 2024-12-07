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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) 
{
    //Iterative PreOrder Traversal
    let stack = [];
    stack.push(root);
    let answer = 0;

    while(stack.length > 0)
    {
        let node = stack.pop();
        if(node)
        {
            if(low <= node.val && node.val <= high)
                answer += node.val;
            if(low < node.val)
                stack.push(node.left);
            if(node.val < high)
                stack.push(node.right);
        }
    }
    return answer;
};