class Solution:
    def mirrorReflection(self, p: int, q: int) -> int:
        def gcd(a: int, b: int) -> int:
            if b == 0:
                return a
            
            return gcd(b, a % b)

        g = gcd(p, q)
        p = (p // g) % 2
        q = (q // g) % 2

        #return 1 if p and q else 0 if p else 2

        if p and q:
            return 1
        
        elif p:
            return 0
        
        else:
            return 2