class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        n = len(grades)
        # find x s.t. (1 + x) * x // 2 <= n
        l = 1
        r = int((2 * n) ** 0.5) + 1

        while l < r:
            mid = (l + r) // 2
            count = (mid + 1) * mid // 2

            if count <= n:
                l = mid + 1

            else:
                r = mid
                
        return l - 1