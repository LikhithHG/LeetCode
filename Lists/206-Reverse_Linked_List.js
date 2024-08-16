/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
struct ListNode* reverseList(struct ListNode* f) 
{
    struct ListNode* temp, prev = null;
    while(f)
    {
        temp = f;
        f = f -> next;
        temp -> next = prev;
        prev = temp;
    }
    return prev;
}
*/


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) 
{
    let temp = new ListNode();
    let prev = new ListNode();
    prev = null;
    while(head)
    {
        temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
};