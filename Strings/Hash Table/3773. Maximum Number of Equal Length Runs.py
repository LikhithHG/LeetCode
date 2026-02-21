class Solution:
    def maxSameLengthRuns(self, s: str) -> int:
        ctr, cnt = defaultdict(int), 0

        for left, rght in pairwise(s):
            if left == rght:
                cnt+=1

            else:
                ctr[cnt]+= 1
                cnt = 0

        ctr[cnt]+= 1
        return max(ctr.values())  