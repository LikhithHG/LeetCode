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
var plusOne = function(head) 
{
   // sentinel head
    let sentinel = new ListNode(0);
    sentinel.next = head;
    let notNine = sentinel;
    
    // find the rightmost not-nine digit
    while (head !== null) 
    {
        if (head.val !== 9)
            notNine = head;
        head = head.next;
    }
    
    // increase this rightmost not-nine digit by 1
    notNine.val++;
    notNine = notNine.next;
    
    // set all the following nines to zeros
    while (notNine !== null) 
    {
        notNine.val = 0;
        notNine = notNine.next;
    }
    
    // return sentinel node if its value is not 0, otherwise return the next node
    return sentinel.val !== 0 ? sentinel : sentinel.next;
};