class Solution:
    def minimumTime(self, jobs: List[int], workers: List[int]) -> int:
        # Sort both jobs and workers
        jobs.sort()
        workers.sort()

        res = 0
        # Calculate the time each worker needs to find the job
        for i in range(len(jobs)):
            res = max(res, ceil(jobs[i]/workers[i]))
        
        return res