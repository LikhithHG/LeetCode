class Solution:
    def maxSum(self, grid: List[List[int]], limits: List[int], k: int) -> int:
        rows = len(grid)
        cols = len(grid[0])
        minHeap = []

        if k == 0:
            return 0

        for i in range(rows):
            topElements = heapq.nlargest(limits[i], grid[i])

            for val in topElements:
                if len(minHeap) < k:
                    heapq.heappush(minHeap, val)
                elif val > minHeap[0]:
                    heapq.heappushpop(minHeap, val)
            
        return sum(minHeap)