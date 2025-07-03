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
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) 
{
    const arr = [];
    inorder(root, arr);

    let left = 0;
    let right = arr.length - k;

    while (left < right) 
    {
        const mid = Math.floor((left + right) / 2);
        if (Math.abs(target - arr[mid + k]) < Math.abs(target - arr[mid])) 
            left = mid + 1;
        else 
            right = mid;
    }

    return arr.slice(left, left + k);
};
function inorder(node, arr) 
{
    if (!node) 
        return;

    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
}