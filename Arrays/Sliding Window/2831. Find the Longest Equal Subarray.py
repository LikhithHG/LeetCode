class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        maxFreq = 0
        left = 0
        count = Counter()

        for right in range(len(nums)):
            count[nums[right]] += 1
            maxFreq = max(maxFreq, count[nums[right]])

            if right - left + 1 - maxFreq > k:
                count[nums[left]] -= 1
                left += 1
        
        return maxFreq