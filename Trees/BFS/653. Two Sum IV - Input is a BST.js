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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) 
{
    let hashMap = new Map();
    let queue = [root];

    while(queue.length > 0)
    {
        let node = queue.shift();
        if(hashMap.has(k - node.val))
            return true;
        hashMap.set(node.val, true);
        if(node.left)
            queue.push(node.left);
        if(node.right)
            queue.push(node.right);
    }
    return false;
};