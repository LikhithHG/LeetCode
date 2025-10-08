class Solution:
    def maxBalancedShipments(self, weight: List[int]) -> int:
        previous = 0
        result = 0

        for w in weight:
            if w < previous:
                result += 1
                previous = 0
            
            else:
                previous = w
        
        return result