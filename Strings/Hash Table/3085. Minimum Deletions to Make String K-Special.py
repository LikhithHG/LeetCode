class Solution:
    def minimumDeletions(self, word: str, k: int) -> int:
        count = defaultdict(int)
        for c in word:
            count[c] += 1
        
        #Begining with result as length of word
        result = len(word)

        #assuming that the value is the minimum
        for a in count.values():
            deleted = 0

            for b in count.values():
                if a > b:
                    deleted += b
                elif b > a + k:
                    deleted += b - (a + k)
            
            result = min(result, deleted)
        
        return result