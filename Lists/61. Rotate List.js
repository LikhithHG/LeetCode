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
var rotateRight = function(head, k) 
{
    if(!head || !head.next || k === 0)
        return head;

    //length of linked list
    let old = head;
    let length = 1;

    while(old.next)
    {
        old = old.next;
        length += 1;
    }
    //connect the last to make cirular list
    old.next = head;

    //k value grater than length
    k = k % length;

    if(k === 0)
    {
        old.next = null; //break the cycle
        return head;
    }

    let newTail = head;
    for(let i = 0; i < length - k - 1; i++)
        newTail = newTail.next;
    
    newHead = newTail.next;

    newTail.next = null;

    return newHead;

};