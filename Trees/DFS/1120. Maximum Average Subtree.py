# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maximumAverageSubtree(self, root: Optional[TreeNode]) -> float:
        self.average = 0

        def dfs(node):
            if not node:
                return (0, 0) #(sum, count)

            leftSum, leftCount = dfs(node.left)
            rightSum, rightCount = dfs(node.right)

            totalSum = leftSum + rightSum + node.val
            totalCount = leftCount + rightCount + 1

            self.average = max(totalSum / totalCount, self.average)

            return (totalSum, totalCount)
        

        totalSum, count = dfs(root)
        return self.average