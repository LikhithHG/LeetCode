/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

 /*
If the node has a right child, and its successor is somewhere lower in the tree. Go to the right once and then as many times to the left as you can. Return the node you end up with.

Node has no right child, and hence its successor is somewhere upper in the tree. Go up till the node that is left child of its parent. The answer is the parent.
 */

var inorderSuccessor = function(node) 
{
    //If node has right child
    if(node.right)
    {
        node = node.right;
        while(node.left)
            node = node.left;
        return node;
    }

    //If node does not have the right child
    while(node.parent && node == node.parent.right) //Stop when it is the left child
        node = node.parent;
    return node.parent;
};