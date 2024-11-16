/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) 
{
    let numSet = new Set(nums);
    let current = head;
    let count = 0;

    while(current)
    {
        if(numSet.has(current.val) && (!current.next || !numSet.has(current.next.val)))
            count += 1;
        current = current.next;
    }
    return count;
};