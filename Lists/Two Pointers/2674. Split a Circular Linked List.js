/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list
 * @return {ListNode[]}
 */
var splitCircularLinkedList = function(list) 
{
    if (list === null || list.next === list) 
        return [list, null];

    let slow = list;
    let fast = list;

    // Find the midpoint
    while (fast.next !== list && fast.next.next !== list) 
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Now slow is at the middle (or middle-right for even length)
    
    // Get the head of the second list
    let head2 = slow.next;
    
    // Find the last node of the second list
    let current = head2;
    while (current.next !== list)
        current = current.next;
    
    // Close both lists as circular
    slow.next = list;       // First list: mid -> head1
    current.next = head2;   // Second list: last -> head2
    
    return [list, head2];
};