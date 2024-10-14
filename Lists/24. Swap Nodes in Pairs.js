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
var swapPairs = function(head) 
{
    let dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while(current.next !== null && current.next.next !== null)
    {
        let first = current.next;
        let second = current.next.next;

        //Swapping
        first.next = second.next;
        second.next = first;
        current.next = second;

        current = first;
    }
    return dummy.next;
};