/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) 
{
    //If there is a cycle, slow and fast will meet at some point.
    //If fast or fast.next becomes null, there is no cycle.
    if (!head || !head.next)
        return null; // No cycle if the list is empty or has only one node

    let slow = head;
    let fast = head;

    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) // Cycle detected
        {
            //It is guranteed that when fast and slow pointer meet for first time and when we advance head and slow pointers at same pace again they will meet in the begining of the loop
            while (fast !== head) 
            {
                head = head.next;
                fast = fast.next;
            }
            return head; // Start of the cycle
        }
    }
    return null;
};