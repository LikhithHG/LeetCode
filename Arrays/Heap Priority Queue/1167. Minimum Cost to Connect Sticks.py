class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        heapify(sticks)
        result = 0

        while len(sticks) > 1:
            newstick = heapq.heappop(sticks) + heapq.heappop(sticks)
            result += newstick
            heapq.heappush(sticks, newstick)
        
        return result