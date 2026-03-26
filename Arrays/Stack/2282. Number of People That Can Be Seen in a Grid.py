class Solution:
    def seePeople(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        result = [[0]*n for _ in range(m)]

        for i in range(m):
            stack = []

            for j in range(n-1,-1,-1):
                equal = False 

                while stack and heights[i][j] >= stack[-1]:
                    
                    if heights[i][j] == stack[-1]:
                        equal = True

                    stack.pop()
                    result[i][j] += 1 

                if stack and not equal:
                    result[i][j] += 1 

                stack.append(heights[i][j])

        for j in range(n):
            stack = []

            for i in range(m-1,-1,-1):
                equal = False 

                while stack and heights[i][j] >= stack[-1]:
                    
                    if heights[i][j] == stack[-1]:
                        equal = True
                        
                    stack.pop()
                    result[i][j] += 1 

                if stack and not equal:
                    result[i][j] += 1 

                stack.append(heights[i][j])

        return result