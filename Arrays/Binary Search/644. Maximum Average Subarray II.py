class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        # Initialize max and min values
        max_val = float('-inf')
        min_val = float('inf')
        
        # Find the maximum and minimum values in the array
        for n in nums:
            max_val = max(max_val, n)
            min_val = min(min_val, n)
        
        prev_mid = max_val
        error = float('inf')
        
        # Perform binary search to find the maximum average
        while error > 0.00001:
            mid = (max_val + min_val) / 2
            if self.check(nums, mid, k):
                min_val = mid
            else:
                max_val = mid
            error = abs(prev_mid - mid)
            prev_mid = mid
        
        return min_val
    
    def check(self, nums, mid, k):
        # Sliding window approach to check if mid can be achieved
        sum_ = 0
        prev = 0
        min_sum = 0
        
        # First, calculate the sum of the first `k` elements minus the mid value
        for i in range(k):
            sum_ += nums[i] - mid
        
        # If the sum is greater than or equal to 0, we can achieve the average
        if sum_ >= 0:
            return True
        
        # Slide the window across the array and keep track of the sum and minimum sum
        for i in range(k, len(nums)):
            sum_ += nums[i] - mid
            prev += nums[i - k] - mid
            min_sum = min(prev, min_sum)
            
            # If we find a sum greater than or equal to the minimum sum, we can achieve the average
            if sum_ >= min_sum:
                return True
        
        return False