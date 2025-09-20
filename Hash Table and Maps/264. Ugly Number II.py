class Solution:
    def nthUglyNumber(self, n: int) -> int:
        minHeap = [1]
        visited = set()
        element = 1
        for _ in range(n):
            element = heapq.heappop(minHeap)
            for mul in [2, 3, 5]:
                if element * mul not in visited:
                    heapq.heappush(minHeap, element * mul)
                    visited.add(element * mul)

        return element