"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
"""
class Solution:
    def toArray(self, node: 'Optional[Node]') -> List[int]:
        res = []
        curr = node
        while curr:
            res.append(curr.val)
            curr = curr.next

        curr = node.prev
        while curr:
            res.insert(0, curr.val)
            curr = curr.prev

        return res