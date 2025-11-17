class Solution:
    def minAbsDifference(self, nums: List[int], goal: int) -> int:
        n = len(nums)
        left = nums[:n//2]
        right = nums[n//2:]

        # Generate all subset sums for a list
        def get_sums(arr):
            sums = [0]
            for num in arr:
                sums += [num + x for x in sums]
            return sums

        left_sums = get_sums(left)
        right_sums = sorted(get_sums(right))

        answer = float('inf')

        # For each left sum, binary search for closest right sum
        for s in left_sums:
            target = goal - s
            idx = bisect_left(right_sums, target)

            # Check the candidate at idx
            if idx < len(right_sums):
                answer = min(answer, abs(s + right_sums[idx] - goal))

            # Check the previous one
            if idx > 0:
                answer = min(answer, abs(s + right_sums[idx - 1] - goal))

        return answer