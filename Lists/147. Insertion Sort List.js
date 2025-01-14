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
var insertionSortList = function(head) 
{
    let dummy = new ListNode();
    let current = head;
    
    while(current !== null)
    {
        //After each iteration we insert the node to the sorted part of the list
        let prev = dummy;
        //Find the position for the node to be inserted
        while(prev.next !== null && prev.next.val <= current.val)
            prev = prev.next;
        
        //Once we find the correct position we will insert

        //This nextNode will keep the next node address Trace this in paper its easy to understand
        let nextNode = current.next;
        current.next = prev.next;
        prev.next = current;
        //Next Iteration
        current = nextNode;
    }
    return dummy.next;
};