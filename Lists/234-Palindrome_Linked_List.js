/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) 
{
    //Take two pointers slow and fast
    //move slow by 1 step and fast by 2 steps. When fast reaches end slow will be at mid of linked list
    let slow = head;
    let fast = head;

    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    //Now to reverse the second half of the linked list and then compare with first half
    let prev = null;
    while(slow)
    {
        let temp = slow;
        slow = slow.next;
        temp.next = prev;
        prev = temp;
    }

    //prev will be the head of second half of linked list that is reversed

    //Now compare the list nodes
    let firstHalf = head;
    let secondHalf = prev;
     while (secondHalf) 
     {
        if (firstHalf.val !== secondHalf.val) 
        {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};