class Solution:
    def maxDepthBST(self, order: List[int]) -> int:
        n = len(order) + 1
        left = list(range(1, n + 2))
        right = list(range(-1, n))
        height = [0] * n

        for o in order[ :: -1]:
            l = left[o - 1]
            r = right[o + 1]
            left[r] = l
            right[l] = r
            height[l] = height[r] = max(height[l], height[r]) + 1

        return height[1]