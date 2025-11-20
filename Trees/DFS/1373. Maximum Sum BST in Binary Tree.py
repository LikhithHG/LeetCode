# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxSumBST(self, root: Optional[TreeNode]) -> int:

        result = 0

        #return status_of_bst, size_of_bst, left_bound, right_bound
        #the status of this subtree, 1 means it's empty, 2 means it's a BST, 0 means it's not a BST
        def traverse(root):
            # To modify the result variable in the outer scope
            nonlocal result 
             
            if not root:
                return 1, 0, None, None
            
            leftStatus, leftSize, leftLow, leftHigh = traverse(root.left)
            rightStatus, rightSize, rightLow, rightHigh = traverse(root.right)

            if((leftStatus == 2 and leftHigh < root.val) or leftStatus == 1) and ((rightStatus == 2 and rightLow > root.val) or rightStatus == 1):
                size = root.val + leftSize + rightSize
                result = max(result, size)

                return 2, size, (leftLow if leftLow is not None else root.val), (rightHigh if rightHigh is not None else root.val)
            
            return 0, None, None, None

        traverse(root)
        return result