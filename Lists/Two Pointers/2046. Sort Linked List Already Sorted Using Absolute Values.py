# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortLinkedList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = head 
        current = head.next
        answer = head

        while current:
            if current.val < 0:
                prev.next = current.next
                current.next = answer
                answer = current
                current = prev.next
            else:
                prev = current
                current = current.next
        
        return answer
    