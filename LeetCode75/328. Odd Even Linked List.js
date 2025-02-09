/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) 
{
    if(!head || !head.next)
        return head;

    let odd = head;
    let even = head.next;

    //to save the head of the even list to connect even at the end
    let evenhead = even;

    while(even !== null && even.next !== null)
    {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;

        //Trace this and is very simple
    }
    odd.next = evenhead;//Connect odd end with even head
    return head;
};