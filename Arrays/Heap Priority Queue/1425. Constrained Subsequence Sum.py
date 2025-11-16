class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        heap = [(-nums[0], 0)]
        answer = nums[0]

        for i in range(1, len(nums)):
            while i - heap[0][1] > k:
                heapq.heappop(heap)
            
            current = max(0, -heap[0][0]) + nums[i]
            answer = max(answer, current)
            heapq.heappush(heap, (-current, i))
        
        return answer