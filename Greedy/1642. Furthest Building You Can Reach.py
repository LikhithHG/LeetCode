class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        #It is a min heap and takes care that lower climb uses bricks and large climb uses ladder
        ladder_allocations = []
        for i in range(len(heights) - 1):
            climb = heights[i + 1] - heights[i]
            
            #if down climb just move on with next one
            if climb <= 0:
                continue
            
            #if not allocate a ladder
            heapq.heappush(ladder_allocations, climb)
            if len(ladder_allocations) <= ladders:
                continue
            
            bricks -= heapq.heappop(ladder_allocations)
            if bricks < 0:
                return i
        
        return len(heights) - 1