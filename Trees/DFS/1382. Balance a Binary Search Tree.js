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
var balanceBST = function(root) {
    const inorder = [];

    // Helper function to perform inorder traversal
    const inorderTraversal = (node) => {
        if (!node) return;
        inorderTraversal(node.left);
        inorder.push(node.val);
        inorderTraversal(node.right);
    };

    // Helper function to construct a balanced BST from inorder array
    const createBalancedBST = (start, end) => {
        if (start > end) return null;

        const mid = Math.floor(start + (end - start) / 2);
        const node = new TreeNode(inorder[mid]);
        node.left = createBalancedBST(start, mid - 1);
        node.right = createBalancedBST(mid + 1, end);
        return node;
    };

    // Step 1: Get sorted values via inorder traversal
    inorderTraversal(root);

    // Step 2: Build balanced BST
    return createBalancedBST(0, inorder.length - 1);
};