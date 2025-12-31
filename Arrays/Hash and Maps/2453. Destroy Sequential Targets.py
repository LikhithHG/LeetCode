class Solution:
    def destroyTargets(self, nums: List[int], space: int) -> int:
        freqs, mi = Counter(), inf

        for num in nums:
            freqs[num % space] += 1

        max_freq = max(freqs.values())

        for num in nums:
            if freqs[num % space] == max_freq and num < mi:
                mi = num
                
        return mi