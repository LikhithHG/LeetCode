class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        if len(nums) % k != 0:
            return False

        count = Counter(nums)

        for num in sorted(count):
            freq = count[num]

            if freq > 0:
                for i in range(num, num + k):
                    if count[i]  < freq:
                        return False
                    count[i] -= freq
        
        return True