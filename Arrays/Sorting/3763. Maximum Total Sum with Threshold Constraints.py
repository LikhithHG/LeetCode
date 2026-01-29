class Solution:
    def maxSum(self, nums: List[int], threshold: List[int]) -> int:
        step = 1
        res = 0
        heap = []

        for idx in range(len(threshold)):
            heapq.heappush(heap, (threshold[idx], idx))
        
        while heap:
            val, idx = heapq.heappop(heap)

            if val > step:
                return res
            
            res += nums[idx]
            step += 1
        
        return res