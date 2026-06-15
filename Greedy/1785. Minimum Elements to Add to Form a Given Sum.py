class Solution:
    def minElements(self, nums: List[int], limit: int, goal: int) -> int:
        diff = abs(sum(nums) - goal)
        return math.ceil(diff / limit)