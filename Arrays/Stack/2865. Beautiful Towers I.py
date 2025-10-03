class Solution:
    def maximumSumOfHeights(self, heights: List[int]) -> int:
        length = len(heights)
        left = [0] * length
        right = [0] * length

        stack = []

        for i in range(length):
            while stack and heights[stack[-1]] > heights[i]:
                stack.pop()
            
            if stack:
                j = stack[-1]
                left[i] = left[j] + (i - j) * heights[i]
            else:
                left[i] = (i + 1) * heights[i]

            stack.append(i)
        
        stack = []
        
        for i in range(length - 1, -1, -1):
            while stack and heights[stack[-1]] > heights[i]:
                stack.pop()
            
            if stack:
                j = stack[-1]
                right[i] = right[j] + (j - i) * heights[i]
            else:
                right[i] = (length - i) * heights[i]
                
            stack.append(i)
        
        answer = 0
        for i in range(length):
            answer = max(answer, left[i] + right[i] - heights[i])
        
        return answer