class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        maxHeap = [-x for x in sorted(nums, reverse=True)[:k]]
        answer = 0

        for _ in range(k):
            maxElement = heapq.heappop(maxHeap)
            answer -= maxElement
            heapq.heappush(maxHeap, maxElement // 3)
        
        return answer