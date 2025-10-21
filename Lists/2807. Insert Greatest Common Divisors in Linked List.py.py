# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def calculateGCD(a, b):
            while b != 0:
                a, b = b, a % b
            return a
        
        #If list has only one node
        if not head.next:
            return head
        
        node1 = head
        node2 = head.next
        while node2:
            gcdValue = calculateGCD(node1.val, node2.val)
            gcdNode = ListNode(gcdValue)

            node1.next = gcdNode
            gcdNode.next = node2

            node1 = node2
            node2 = node2.next
        
        return head