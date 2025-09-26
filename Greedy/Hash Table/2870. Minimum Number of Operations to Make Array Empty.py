class Solution:
    def minOperations(self, nums: List[int]) -> int:
        count = Counter(nums)
        answer = 0

        for c in count.values():
            if c == 1:
                return -1
            answer += ceil(c / 3)
        
        return answer
        