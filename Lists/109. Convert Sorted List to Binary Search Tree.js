/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) 
{
    let values = [];
    while(head)
    {
        values.push(head.val);
        head = head.next;
    }

    function convertBST(l, r)
    {
        if(l > r)
            return null;
        
        let mid = Math.floor((l + r) / 2);

        let node = new TreeNode(values[mid]);
        if(l === r)
            return node;
        
        node.left = convertBST(l, mid - 1);
        node.right = convertBST(mid + 1, r);
        return node;
    }
    return convertBST(0, values.length - 1);
};