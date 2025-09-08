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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) 
{
    if (!root) 
        return [];

    const leftBoundary = [];
    const rightBoundary = [];
    const leaves = [];

    const isLeaf = (node) => !node.left && !node.right;

    const isRightBoundary = (flag) => flag === 2;
    const isLeftBoundary = (flag) => flag === 1;
    const isRoot = (flag) => flag === 0;

    const leftChildFlag = (node, flag) => {
        if (isLeftBoundary(flag) || isRoot(flag))
            return 1;
        else if (isRightBoundary(flag) && !node.right) 
            return 2;
        else 
            return 3;
    };

    const rightChildFlag = (node, flag) => {
        if (isRightBoundary(flag) || isRoot(flag)) 
            return 2;
        else if (isLeftBoundary(flag) && !node.left) 
            return 1;
        else 
            return 3;
    };

    const preorder = (node, flag) => {
        if (!node) 
            return;

        if (isRightBoundary(flag)) 
            rightBoundary.unshift(node.val); // reverse order
        else if (isLeftBoundary(flag) || isRoot(flag)) 
            leftBoundary.push(node.val);
        else if (isLeaf(node)) 
            leaves.push(node.val);

        preorder(node.left, leftChildFlag(node, flag));
        preorder(node.right, rightChildFlag(node, flag));
    };

    preorder(root, 0);

    // Combine all parts
    return [...leftBoundary, ...leaves, ...rightBoundary];
};