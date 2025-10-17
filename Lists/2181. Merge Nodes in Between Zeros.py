# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        modify = head.next
        nextSum = modify

        while nextSum:
            total = 0
            while nextSum.val != 0:
                total += nextSum.val
                nextSum = nextSum.next
            
            modify.val = total
            nextSum = nextSum.next

            modify.next = nextSum
            modify = modify.next
        
        return head.next