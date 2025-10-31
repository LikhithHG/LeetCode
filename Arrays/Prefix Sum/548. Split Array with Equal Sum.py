class Solution:
    def splitArray(self, nums: List[int]) -> bool:
        if len(nums) < 7:
            return False

        # Step 1: Compute the prefix sum array
        prefixSum = [0] * len(nums)
        prefixSum[0] = nums[0]

        for i in range(1, len(nums)):
            prefixSum[i] = prefixSum[i - 1] + nums[i]

        # Step 2: Try to find valid partitions
        for j in range(2, len(nums) - 3):
            seenSums = set()

            # Find valid partitions for the left part
            for i in range(1, j - 1):
                if prefixSum[i - 1] == prefixSum[j - 1] - prefixSum[i]:
                    seenSums.add(prefixSum[i - 1])
            
            # Find valid partitions for the right part
            for k in range(j + 2, len(nums) - 1):
                if prefixSum[len(nums) - 1] - prefixSum[k] == prefixSum[k - 1] - prefixSum[j] and prefixSum[k - 1] - prefixSum[j] in seenSums:
                    return True
        
        return False