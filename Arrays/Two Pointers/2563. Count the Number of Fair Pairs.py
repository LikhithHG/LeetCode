class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        
        def lowerBound(value: int) -> int:
            left = 0
            right = len(nums) - 1
            result = 0

            while left < right:
                total = nums[left] + nums[right]

                if total < value:
                    result += right - left
                    left += 1
                
                else:
                    right -= 1
                
            return result

        nums.sort()
        return lowerBound(upper + 1) - lowerBound(lower)