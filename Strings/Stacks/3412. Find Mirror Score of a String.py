class Solution:
    def calculateScore(self, s: str) -> int:
        seen = [[] for i in range(26)]
        result = 0

        for i, character in enumerate(s):

            value = ord(character) - ord('a')

            if seen[25 - value]:
                j = seen[25 - value].pop()
                result += i - j
            
            else:
                seen[value].append(i)
        
        return result