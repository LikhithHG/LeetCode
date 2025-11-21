class Solution:
    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:
        left = 0
        n = len(fruits)
        total = 0
        answer = 0

        def step(left: int, right: int) -> int:
            if fruits[right][0] <= startPos:
                return startPos - fruits[left][0]

            elif fruits[left][0] >= startPos:
                return fruits[right][0] - startPos

            else:
                return (
                    min(
                        abs(startPos - fruits[right][0]),
                        abs(startPos - fruits[left][0]),
                    ) + fruits[right][0] - fruits[left][0]
                )
            
        for right in range(n):
            total += fruits[right][1]
            while left <= right and step(left, right) > k:
                total -= fruits[left][1]
                left += 1
            
            answer = max(answer, total)
        
        return answer