class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        #tuple of profits abnd its corresponding capital needed
        projects = [(capital[i], profits[i]) for i in range(n)]

        #sort the projects
        projects.sort()

        #we need a max heap to store so we use the negate
        maxheap = []
        i = 0

        while k > 0:
            while i < n and projects[i][0] <= w:
                heappush(maxheap, -projects[i][1])
                i += 1
            #if maxheap is empty break
            if not maxheap:
                break
            
            w += -heappop(maxheap)
            k -= 1
        
        return w