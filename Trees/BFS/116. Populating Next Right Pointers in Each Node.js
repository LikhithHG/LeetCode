/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) 
{
    if(root === null)
        return root;
    
    //Root node has no next pointers
    let leftMost = root;
    while(leftMost.left) //To iterate to the until the last level of the tree
    {
        //Iterate the list
        let head = leftMost;
        while(head)//To iterate into each level
        {
            //From the diagram
            head.left.next = head.right;

            if(head.next)
                head.right.next = head.next.left;
            
            head = head.next;
        }
        leftMost = leftMost.left;
    }
    return root;
};