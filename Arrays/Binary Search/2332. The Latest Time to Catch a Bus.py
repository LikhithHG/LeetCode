class Solution:
    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:
        buses.sort()
        passengers.sort()
        
        cur = 0
        passenger_set = set(passengers) # Faster lookups
        
        for b_time in buses:
            cap = 0
            # Fill the bus until it's full or no more valid passengers
            while cur < len(passengers) and cap < capacity and passengers[cur] <= b_time:
                cur += 1
                cap += 1
            
            # Potential answer: 
            # If bus isn't full, try the bus departure time.
            # If bus is full, try the arrival time of the last passenger who got on.
            if cap < capacity:
                ans = b_time
            else:
                ans = passengers[cur - 1]
        
        # Ensure we don't arrive at the same time as someone else
        while ans in passenger_set:
            ans -= 1
            
        return ans