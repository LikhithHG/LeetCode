/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) 
{
    let length = 0;
    let current = head;

    // First pass to find the length of the list
    while (current) 
    {
        length++;
        current = current.next;
    }

    // Identify the k-th node from the beginning and the end
    let firstPos = k;
    let secondPos = length - k + 1;

    let firstNode = null, secondNode = null;
    current = head;
    let index = 1;

    // Second pass to locate the nodes
    while (current) 
    {
        if (index === firstPos) 
            firstNode = current;

        if (index === secondPos) 
            secondNode = current;

        current = current.next;
        index++;
    }

    // Swap the values of the nodes
    if (firstNode && secondNode) 
    {
        let temp = firstNode.val;
        firstNode.val = secondNode.val;
        secondNode.val = temp;
    }

    return head;    
};