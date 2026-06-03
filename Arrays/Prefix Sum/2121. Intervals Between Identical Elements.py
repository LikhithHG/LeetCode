class Solution:
    def processIndices(self, indices: List[int], ans: List[int]) -> None:
        current = sum(indices)
        prev = 0
        n = len(indices)

        for i in range(n):
            current += (indices[i] - prev) * (2 * i - n)
            ans[indices[i]] = current
            prev = indices[i]

    def getDistances(self, arr: List[int]) -> List[int]:
        dict = {}

        for i, num in enumerate(arr):
            dict.setdefault(num, []).append(i)

        ans = [0] * len(arr)

        for indices in dict.values():
            self.processIndices(indices, ans)

        return ans