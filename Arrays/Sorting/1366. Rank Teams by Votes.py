class Solution:
    def rankTeams(self, votes: List[str]) -> str:
        n = len(votes[0])
        rank = defaultdict(lambda: [0]*n)

        for v in votes:
            for i, ch in enumerate(v):
                rank[ch][i] -= 1
                
        return ''.join(sorted(rank.keys(), key=lambda x: (rank[x], x)))