# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def equalToDescendants(self, root: Optional[TreeNode]) -> int:
        self.count = 0
        
        def dfs(node):
            if not node:
                return 0

            leftSum = dfs(node.left)
            rightSum = dfs(node.right)

            if node.val == leftSum + rightSum:
                self.count += 1

            return leftSum + rightSum + node.val

        total = dfs(root)
        return self.count   