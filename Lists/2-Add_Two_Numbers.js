/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) 
{
    let output = new ListNode(0);
    let dummy = output;
    let carry = 0;

    while(l1 || l2 || carry != 0)
    {
        let value1 = (l1 !== null) ? l1.val : 0;
        let value2 = (l2 !== null) ? l2.val : 0;
        
        let sum = value1 + value2 + carry;
        let result = sum % 10;
        carry = Math.floor(sum/10);
        
        dummy.next = new ListNode(result);
        dummy = dummy.next;

        if (l1 !== null) 
            l1 = l1.next;
        if (l2 !== null) 
            l2 = l2.next;
    }
    return output.next;
};