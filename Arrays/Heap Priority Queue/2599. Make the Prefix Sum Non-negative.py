class Solution:
    def makePrefSumNonNegative(self, nums: List[int]) -> int:
        prefixSum, operations, priQueue = 0, 0, []

        for num in nums:
            if num < 0:
                heappush(priQueue, num)
            
            prefixSum += num

            if prefixSum < 0:
                prefixSum -= heappop(priQueue)
                operations += 1
            
        return operations