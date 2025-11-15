class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        count = 0

        for i in range(n):
            x = 0
            for j in range(i, n):
                if nums[j] == target:
                    x += 1
                length = j - i + 1
                if x > length // 2:
                    count += 1
        
        return count