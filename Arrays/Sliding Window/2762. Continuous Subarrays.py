class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        left = right = 0
        currentMin = currentMax = nums[right]

        total = windowLen = 0

        for right in range(len(nums)):
            currentMin = min(currentMin, nums[right])
            currentMax = max(currentMax, nums[right])

            #if the rule breaks
            if currentMax - currentMin > 2:
                windowLen = right - left
                total += windowLen * (windowLen + 1) // 2

                #Go backwards to remove overcounted wiondows
                left = right
                currentMin = currentMax = nums[right]
                while left > 0 and abs(nums[right] - nums[left - 1]) <= 2:
                    left -= 1
                    currentMin = min(currentMin, nums[left])
                    currentMax = max(currentMax, nums[left])
                
                #Remove overcounted windows
                if left < right:
                    windowLen = right - left
                    total -= windowLen * (windowLen + 1) // 2
        
        #Final Window
        windowLen = right - left + 1
        total += windowLen * (windowLen + 1) // 2
        return total