class Solution:
    def findDerangement(self, n: int) -> int:
        MOD = 1000000007
        mul = 1
        total_sum = 0
        
        # We iterate backwards just like your Java loop
        for i in range(n, -1, -1):
            # i % 2 == 0 ? 1 : -1
            sign = 1 if i % 2 == 0 else -1
            
            # (sum + M + mul * sign) % M
            total_sum = (total_sum + mul * sign) % MOD
            mul = (mul * i) % MOD
            
        return total_sum