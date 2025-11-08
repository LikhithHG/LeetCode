class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        answer = 0
        minIndex = maxIndex = leftIndex = -1

        for index, number in enumerate(nums):
            if number < minK or number > maxK:
                leftIndex = index
            
            if number == minK:
                minIndex = index

            if number == maxK:
                maxIndex = index
            
            answer += max(0, min(minIndex, maxIndex) - leftIndex)
        
        return answer