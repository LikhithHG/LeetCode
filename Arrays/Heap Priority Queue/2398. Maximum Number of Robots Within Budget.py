class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        current = 0
        i = 0
        n = len(runningCosts)
        s = SortedList()

        for j in range(n):
            current += runningCosts[j]
            s.add(chargeTimes[j])

            if s[-1] + (j - i + 1) * current > budget:
                s.remove(chargeTimes[i])
                current -= runningCosts[i]
                i += 1
            
        return n - i