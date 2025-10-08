class Solution:
    def maximumLengthOfRanges(self, nums: List[int]) -> List[int]:
        stack = []
        answer = [0] * len(nums)

        nums.append(10 ** 9) # To flush out all things in the end with max value

        for i, num in enumerate(nums):
            
            while stack and stack[-1][1] < num:
                index, value = stack.pop()
                left = -1 if not stack else stack[-1][0]
                answer[index] = i - left - 1

            stack.append((i, num))
        
        return answer