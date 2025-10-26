class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        
        def timeEnough(givenTime):
            actualTrips = 0
            for t in time:
                actualTrips += givenTime // t
            
            return actualTrips >= totalTrips
        
        # Initialize the left and right boundaries.
        left = 1
        right = max(time) * totalTrips

        while left < right:
            mid = (left + right) // 2
            if timeEnough(mid):
                right = mid
            else:
                left = mid + 1
        
        return left