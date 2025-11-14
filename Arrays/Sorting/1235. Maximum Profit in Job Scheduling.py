class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        jobs = []
        
        # Storing job's details into one list
        # This will help in sorting the jobs while maintaining the other parameters
        for i in range(len(profit)):
            jobs.append([startTime[i], endTime[i], profit[i]])
        
        # Sorting the jobs based on start time
        jobs.sort(key=lambda x: x[0])
        
        return self.findMaxProfit(jobs)
    
    def findMaxProfit(self, jobs):
        n = len(jobs)
        maxProfit = 0
        # Min-heap having {endTime, profit}
        pq = []
        
        for job in jobs:
            start, end, profit = job
            
            # Keep popping while the heap is not empty and
            # jobs are not conflicting
            # Update the value of maxProfit
            while pq and start >= pq[0][0]:
                maxProfit = max(maxProfit, pq[0][1])
                heapq.heappop(pq)
            
            # Combined job profit after including current job
            heapq.heappush(pq, [end, profit + maxProfit])
        
        # Update the value of maxProfit by comparing with
        # profit of jobs that exist in the heap
        while pq:
            maxProfit = max(maxProfit, pq[0][1])
            heapq.heappop(pq)
        
        return maxProfit