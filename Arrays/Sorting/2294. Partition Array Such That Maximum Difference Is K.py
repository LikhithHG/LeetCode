class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        nums.sort()
        answer = 1
        position = nums[0]

        for num in nums:
            if num - position > k:
                answer += 1
                position = num
            
        return answer