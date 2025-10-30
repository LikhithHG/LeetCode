class Solution:
    def minimumSplits(self, nums: List[int]) -> int:
        if len(nums) == 0:  # Handle edge case for empty array
            return 0

        res = 1  # At least one segment is required
        pregcd = nums[0]  # Initialize with the first element

        for i in range(1, len(nums)):
            pregcd = self.gcd(pregcd, nums[i])  # Calculate GCD of current segment
            if pregcd == 1:
                res += 1  # We need to split the array here
                pregcd = nums[i]  # Start a new segment from the current element

        return res
    
    # Function to compute the GCD using Euclidean algorithm
    def gcd(self, n1, n2):
        while n2 != 0:
            remainder = n1 % n2
            n1 = n2
            n2 = remainder
        return n1