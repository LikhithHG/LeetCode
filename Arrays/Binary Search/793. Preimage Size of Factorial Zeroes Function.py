class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        def zeta(x):
            return x // 5 + zeta(x // 5) if x > 0 else 0

        lo, hi = k, 10 * k + 1
        while lo < hi:
            mi = (lo + hi) // 2
            zmi = zeta(mi)
            
            if zmi == k: 
                return 5
            elif zmi < k: 
                lo = mi + 1
            else: 
                hi = mi

        return 0