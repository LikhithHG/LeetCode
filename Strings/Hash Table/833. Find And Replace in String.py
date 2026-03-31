class Solution:
    def findReplaceString(self, s: str, indices: List[int], sources: List[str], targets: List[str]) -> str:
        ans = list(s)

        for idx, (i, source) in enumerate(zip(indices, sources)):
            if s[i: i + len(source)] == source:
                ans[i] = targets[idx]
                
                for j in range(i + 1, i + len(source)):
                    ans[j] = ''
        
        return "".join(ans)