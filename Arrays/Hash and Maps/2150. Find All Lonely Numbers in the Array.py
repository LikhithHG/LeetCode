class Solution:
    def findLonely(self, nums: List[int]) -> List[int]:
        count = Counter(nums)
        res = []

        for x in count:
            if count[x] == 1 and x - 1 not in count and x + 1 not in count:
                res.append(x)

        return res