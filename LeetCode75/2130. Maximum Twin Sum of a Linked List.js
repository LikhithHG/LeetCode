/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) 
{
    let slow = head;
    let fast = head;

    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    let nextNode = new ListNode();
    let prev = new ListNode();
    prev = null;

    while(slow)
    {
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    let start = head;
    let maxSum = 0;
    while(prev)
    {
        maxSum = Math.max(maxSum, start.val + prev.val);
        prev = prev.next;
        start = start.next;
    }
    return maxSum;
};