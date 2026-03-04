class Solution:
    def equalCountSubstrings(self, s: str, count: int) -> int:
        ans = 0

        for k in range(1, 27):
            # Sliding Window
            freq = Counter()
            uniq = 0
            start = 0

            for end in range(len(s)):  
                right_char = s[end]
                freq[right_char] += 1

                if freq[right_char] == count: 
                    uniq += 1

                if end - start + 1 > count * k:
                    left_char = s[start]

                    if freq[left_char] == count: 
                        uniq -= 1

                    freq[left_char] -= 1
                    start += 1

                if uniq == k: 
                    ans += 1
                    
        return ans