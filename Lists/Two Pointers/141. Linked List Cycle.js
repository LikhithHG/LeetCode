/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) 
{
    //If there is a cycle, slow and fast will meet at some point.
    //If fast or fast.next becomes null, there is no cycle.
    if (!head || !head.next)
        return false; // No cycle if the list is empty or has only one node

    let slow = head;
    let fast = head.next;

    while (slow !== fast) 
    {
        if (!fast || !fast.next)
            return false; // No cycle if fast or fast.next is null
        slow = slow.next;        // Move slow by one step
        fast = fast.next.next;   // Move fast by two steps
    }

    return true; // If slow === fast, a cycle exists
};