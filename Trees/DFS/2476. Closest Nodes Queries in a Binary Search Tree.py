# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:
        def inorder(root, arr):
            if not root: 
                return
            inorder(root.left, arr)
            arr.append(root.val)
            inorder(root.right, arr)
        
        arr = []
        inorder(root, arr)
        ans = []
        n = len(arr)

        for key in queries:
            left, right = 0, n - 1

            while right >= left:
                mid = (right + left) // 2
                if arr[mid] == key:
                    break
                elif arr[mid] > key:
                    right = mid - 1
                else:
                    left = mid + 1

            if arr[mid] == key:
                ans.append([arr[mid], arr[mid]])

            elif arr[mid] > key:
                if (mid - 1) >= 0:
                    ans.append([arr[mid - 1], arr[mid]])
                else:
                    ans.append([-1, arr[mid]])

            else:
                if (mid + 1) < n:
                    ans.append([arr[mid], arr[mid + 1]])
                else:
                    ans.append([arr[mid], -1])
                    
        return ans