class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        if k == 1 or len(nums) == k:
            return 0

        indices = [idx for idx, num in enumerate(nums) if num == 1]
        mid = k // 2

        odd = k % 2
        extraSteps = (mid + odd) * mid
        minSwaps = midSteps = sum(indices[mid + odd : k])-sum(indices[ : mid])
        if midSteps == extraSteps:
            return 0
        
        end = k
        start = 0
        for idx in range(mid, len(indices) - k + mid):
            # 2 rolling sums
            midSteps += indices[start] - indices[idx] + indices[end] - indices[idx + odd]
            start += 1
            end += 1
            if midSteps == extraSteps:
                return 0
            elif minSwaps > midSteps:
                minSwaps = midSteps

        return minSwaps - extraSteps