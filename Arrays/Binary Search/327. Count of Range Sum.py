class Solution:
    def countRangeSum(self, nums: List[int], lower: int, upper: int) -> int:
        res = 0
        prefix = [0]
        curr = 0

        for num in nums:
            curr += num
            res += self.binary_search_high(prefix, curr - lower) - self.binary_search_low(prefix, curr - upper)
            insert_index = self.binary_search_high(prefix, curr)
            prefix.insert(insert_index, curr)
        return res

    def binary_search_high(self, arr, target):
        left, right = 0, len(arr)
        while left < right:
            mid = (right + left) // 2
            if arr[mid] <= target:
                left = mid + 1
            else:
                right = mid
        return left

    def binary_search_low(self, arr, target):
        left, right = 0, len(arr)
        while left < right:
            mid = (right + left) // 2
            if arr[mid] < target: # This the the only difference
                left = mid + 1
            else:
                right = mid
        return left