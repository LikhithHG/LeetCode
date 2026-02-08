# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelMedian(self, root: Optional[TreeNode], level: int) -> int:
        # Check if root is None (though the problem usually guarantees a valid root)
        if not root:
            return 0 
            
        # If level 0, return root value immediately
        if level == 0:
            return root.val

        current_level = [root]

        # Traverse layer by layer until we reach the target level
        for _ in range(level):
            next_level = []

            for node in current_level:
                if node.left:
                    next_level.append(node.left)
                    
                if node.right:
                    next_level.append(node.right)
            
            # If the next level is empty before we reached the target 'level', return -1
            if not next_level:
                return -1
            
            current_level = next_level

        # Calculate the median index
        # Java logic uses: (left + right) >>> 1
        # In Python list terms (0 to N), this is equivalent to len // 2
        mid_index = len(current_level) // 2
        
        return current_level[mid_index].val