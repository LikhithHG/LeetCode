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
 */
var BSTIterator = function(root) 
{
    this.stack = []; // Stack to hold nodes for in-order traversal
    // Push all the leftmost nodes
    while(root)
    {
        this.stack.push(root);
        root = root.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() 
{
    let res = this.stack.pop();
    let cur = res.right;
    while(cur)
    {
        this.stack.push(cur);
        cur = cur.left;
    }
    return res.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() 
{
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */