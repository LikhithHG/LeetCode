class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:
        ans = []
        i1 = i2 = 0

        while i1 < len(word1) and i2 < len(word2): 
            if word1[i1:] > word2[i2:]: 
                ans.append(word1[i1])
                i1 += 1

            else: 
                ans.append(word2[i2])
                i2 += 1
                
        return "".join(ans) + word1[i1:] + word2[i2:]