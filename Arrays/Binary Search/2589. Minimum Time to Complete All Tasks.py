class Solution:
    def findMinimumTime(self, tasks: List[List[int]]) -> int:
        tasks.sort(key = lambda x:(x[1],x[0]))
        
        times = [False]*2001
        
        for start, end, duration in tasks:
            dur,e = duration,end
            for s in range(start,end+1):
                if times[s]:
                    dur -= 1
                    
            while dur > 0:
                if not times[e]:
                    times[e] = True
                    dur -= 1
                e -= 1
        
        return sum(times)