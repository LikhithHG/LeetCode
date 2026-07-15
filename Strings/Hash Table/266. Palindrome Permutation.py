class Solution:
    def canPermutePalindrome(self, s: str) -> bool:
        count =  Counter(s)

        # odds = sum(val % 2 for val in count.values())
        # return odds <= 1
        odds = 0
        for val in count.values():
            if val % 2 == 1:
                odds += 1
        
        return odds <= 1