class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:
        pq = []

        #append the target along with the stations indicating final destination
        stations.append((target, float('inf')))

        answer = 0

        #previous location of the station
        previous = 0

        for location, capacity in stations:
            startFuel -= location - previous

            #if the startFuel becomes less than 0 here it musty have refueled before 
            #and uses the max capacity fuel station using priority queue
            while pq and startFuel < 0:
                startFuel += -heapq.heappop(pq)
                answer += 1
            
            #Even after fueling in the past startFuel is 0 then it is not possible to reach
            if startFuel < 0:
                return -1
            
            #Put this value to max priority queue 
            heapq.heappush(pq, -capacity)
            previous = location
        
        return answer