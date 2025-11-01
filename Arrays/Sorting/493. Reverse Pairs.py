class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        # n = len(nums)
        # count = 0
        # for i in range(n):
        #     for j in range(i):
        #         if nums[j] > nums[i] * 2:
        #             count += 1
        # return count

        def merge_sort(start, end):
            if end - start <= 1:
                return 0
            
            mid = (start + end) // 2
            count = merge_sort(start, mid) + merge_sort(mid, end)
            
            # Count pairs (left, right)
            j = mid
            for i in range(start, mid):
                while j < end and nums[i] > 2 * nums[j]:
                    j += 1
                count += j - mid
            
            # Merge step (to keep nums sorted)
            nums[start:end] = sorted(nums[start:end])
            return count

        return merge_sort(0, len(nums))