/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) 
{
    let visitedNodes = new Set();
    let currentA = headA;
    while (currentA !== null) 
    {
        visitedNodes.add(currentA); 
        currentA = currentA.next;
    }

    let currentB = headB;
    while (currentB !== null) 
    {
        if (visitedNodes.has(currentB)) 
        {
            return currentB; 
        }
        currentB = currentB.next;
    }
    return null;
};