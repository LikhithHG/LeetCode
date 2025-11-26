class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        p = inf
        result = 0

        for index, color in enumerate(colors):
            if color != colors[0]:
                result = index
                p = min(p, index)
            
            else:
                result = max(result, index - p)
        
        return result