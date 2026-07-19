class Solution:
    def maxValueAfterReverse(self, nums: List[int]) -> int:
        n = len(nums)

        #Originl Array Value
        total = sum(
            abs(nums[i] - nums[i + 1])
            for i in range(n - 1)
        )

        bestGain = 0

        # Used for reversals completely inside the array
        maxMins = float("-inf")
        minMaxs = float("inf")

        for i in range(n - 1):
            a = nums[i]
            b = nums[i + 1]
            current = abs(a - b)

            #Reverse nums[0 ... i]
            bestGain = max(
                bestGain,
                abs(nums[0] - b) - current
            )

            #Reverse nums[i + 1 ...n - 1]
            bestGain = max(
                bestGain,
                abs(nums[-1] - a) - current
            )

            maxMins = max(maxMins, min(a, b))
            minMaxs = min(minMaxs, max(a, b))
        
        #Reverse a subarray that does not touch either end
        bestGain = max(
            bestGain,
            2 * (maxMins - minMaxs)
        )

        return total + bestGain