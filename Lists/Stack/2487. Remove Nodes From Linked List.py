# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []
        current = head

        while current:
            stack.append(current)
            current = current.next

        current = stack.pop()
        maximum = current.val
        resultList = ListNode(maximum)

        while stack:
            current = stack.pop()
            if current.val < maximum:
                continue
            else:
                newNode = ListNode(current.val)
                newNode.next = resultList
                resultList = newNode
                maximum = current.val
        
        return resultList