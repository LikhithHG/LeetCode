# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countGreatEnoughNodes(self, root: Optional[TreeNode], k: int) -> int:
        self.count = 0

        def dfs(node):
            if node is None:
                return 0, []
            
            leftCount, left = dfs(node.left)
            rightCount, right = dfs(node.right)

            value = 1 + leftCount + rightCount
            v = sorted([node.val] + left + right)[:k]

            if value >= k and sum([node.val > i for i in v]) == k:
                self.count += 1
            
            return value, v
        
        dfs(root)

        return self.count