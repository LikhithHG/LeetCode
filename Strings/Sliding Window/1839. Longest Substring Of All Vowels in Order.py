class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        count = 0
        length = 0
        answer = 0

        for i in range(len(word)):
            if i > 0 and word[i] >= word[i - 1]:
                if word[i] != word[i - 1]:
                    count += 1
                length += 1
            
            else:
                length = 1
                count = 1
            
            if count == 5:
                answer = max(answer, length)
        
        return answer