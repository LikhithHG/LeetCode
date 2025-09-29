class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        n = len(cookies)
        possibility = [0] * k
        
        def ways(i, count, maximum):
            if n - i < count:
                return float('inf')

            if i == n:
                return maximum
            
            result = float('inf')

            for j in range(k):
                count -= 1 if possibility[j] == 0 else 0
                possibility[j] += cookies[i]
                new_maximum = max(possibility[j], maximum) 
                result = min(result, ways(i + 1, count, new_maximum))
                possibility[j] -= cookies[i]
                count += 1 if possibility[j] == 0 else 0
            
            return result
    
        return ways(0, k, 0)