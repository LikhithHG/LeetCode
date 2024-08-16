/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val)
{
    //If head has the value to be removed
    while(head !== null && head.val === val)
        head = head.next;
    
    let temp = head;

    //Always the first element will be checked in the begining
    //So only temp and temp.next are being checked
    while(temp && temp.next)
    {
        if(temp.next.val === val)
            temp.next = temp.next.next;
        
        else
            temp = temp.next;
    }
    return head;
};