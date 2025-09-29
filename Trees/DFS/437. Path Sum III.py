# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        self.count = 0
        sum_map = defaultdict(int) 
        sum_map[0] = 1
            
        def dfs(node, currentSum):
            if not node:
                return 0
            
            currentSum += node.val
            
            self.count += sum_map[currentSum - targetSum]
            sum_map[currentSum] += 1
            dfs(node.left, currentSum)
            dfs(node.right, currentSum)
            sum_map[currentSum] -= 1
            
        
        dfs(root, 0)
        return self.count