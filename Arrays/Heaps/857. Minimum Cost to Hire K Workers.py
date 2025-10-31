class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        n = len(quality)
        totalCost = float("inf")
        currentTotalQuality = 0
        wageQualityRatio = []

        # Calculate wage-to-quality ratio for each worker
        for i in range(n):
            wageQualityRatio.append((wage[i] / quality[i], quality[i]))

        # Sort workers based on their wage-to-quality ratio
        wageQualityRatio.sort(key = lambda x: x[0])

        # Use a heap to keep track of the highest quality workers
        workers = []

        # Iterate through workers
        for i in range(n):
            heapq.heappush(workers, -wageQualityRatio[i][1])
            currentTotalQuality += wageQualityRatio[i][1]

            # If we have more than k workers,
            # remove the one with the highest quality
            if len(workers) > k:
                currentTotalQuality += heapq.heappop(workers)

            # If we have exactly k workers,
            # calculate the total cost and update if it's the minimum
            if len(workers) == k:
                totalCost = min(totalCost, currentTotalQuality * wageQualityRatio[i][0])

        return totalCost