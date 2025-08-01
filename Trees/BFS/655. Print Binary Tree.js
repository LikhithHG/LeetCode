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
 * @return {string[][]}
 */
var printTree = function(root) 
{
    const height = getHeight(root);
    const width = (1 << height) - 1; // 2^height - 1
    const res = Array.from({ length: height }, () => Array(width).fill(""));

    const queue = [
        {
            node: root,
            row: 0,
            left: 0,
            right: width
        }
    ];

    while (queue.length > 0) 
    {
        const { node, row, left, right } = queue.shift();
        const mid = Math.floor((left + right) / 2);
        res[row][mid] = node.val.toString();

        if (node.left !== null) 
        {
            queue.push({
                node: node.left,
                row: row + 1,
                left: left,
                right: mid
            });
        }

        if (node.right !== null) 
        {
            queue.push({
                node: node.right,
                row: row + 1,
                left: mid + 1,
                right: right
            });
        }
    }

    return res;
};

function getHeight(root) 
{
    if (!root) return 0;
    let height = 0;
    let queue = [root];

    while (queue.length > 0) 
    {
        let size = queue.length;
        height++;
        for (let i = 0; i < size; i++) 
        {
            const node = queue.shift();
            if (node.left !== null) 
                queue.push(node.left);
            if (node.right !== null) 
                queue.push(node.right);
        }
    }

    return height;
}