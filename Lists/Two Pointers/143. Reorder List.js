/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) 
{
    //find the mid of the list 
    //Reverse the second half of the list
    //Merge the list
    if(!head && !head.next)
        return;

    let slow = head, fast = head;
    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;
    while(curr)
    {
        let temp = curr;
        curr = curr.next;
        temp.next = prev;
        prev = temp;
    }

    let first = head; 
    let second = prev;
    while(second.next)
    {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};