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
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) 
{
    // Helper function for in-order traversal
    function dfs(node, list) 
    {
        if (node === null) return;
        dfs(node.left, list);
        list.push(node.val);
        dfs(node.right, list);
    }

    // Perform in-order traversal to get sorted arrays
    const nodeList1 = [];
    const nodeList2 = [];
    dfs(root1, nodeList1);
    dfs(root2, nodeList2);

    // Two pointers approach
    let pointer1 = 0, pointer2 = nodeList2.length - 1;
    while (pointer1 < nodeList1.length && pointer2 >= 0) 
    {
        const sum = nodeList1[pointer1] + nodeList2[pointer2];
        // Found a pair
        if (sum === target)
            return true; 
        else if (sum < target)
            pointer1++; // Increase sum
        else 
            pointer2--; // Decrease sum
        
    }

    return false; // No pair found    
};