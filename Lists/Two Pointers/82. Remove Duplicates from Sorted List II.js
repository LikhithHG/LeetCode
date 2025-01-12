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
var deleteDuplicates = function(head) 
{
    let dummy = new ListNode(0);
    dummy.next = head;
    // sentinel let sentinel = new ListNode(0, head);

    let pred = dummy; 

    while(head)
    {
        //If head is begining with duplicates skip all the duplicates
        if(head.next && head.val === head.next.val)
        {
            while(head.next && head.val === head.next.val)
                head = head.next;
            pred.next = head.next
        }
        else
            pred = pred.next; 

        head = head.next;
    }
    return dummy.next;
};