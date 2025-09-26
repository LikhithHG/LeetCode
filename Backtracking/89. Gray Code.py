class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = [0]
  
        for i in range(1, n + 1):
            previousLen = len(result)
            bitmask = 1 << (i - 1)
            for j in range(previousLen - 1, -1, -1):
                result.append(bitmask + result[j])
            
        return result