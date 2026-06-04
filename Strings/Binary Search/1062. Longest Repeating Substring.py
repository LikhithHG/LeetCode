class Solution:
    def longestRepeatingSubstring(self, s: str) -> int:
        def has_repeat(length):
            seen = set()

            for i in range(len(s)-length+1):
                sub = s[i:i+length]

                if sub in seen:
                    return True

                seen.add(sub)

            return False
        
        left = 1
        right = len(s) - 1
        ans = 0

        while left <= right:
            mid = (left + right) // 2

            if has_repeat(mid):
                ans = mid
                left = mid + 1
                
            else:
                right = mid - 1

        return ans