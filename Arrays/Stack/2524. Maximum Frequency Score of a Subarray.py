class Solution:
    MOD = 10**9 + 7
    
    def maxFrequencyScore(self, nums: List[int], k: int) -> int:
        freq = defaultdict(int)
        curr_score = 0
        max_score = 0

        for i, num in enumerate(nums):
            # Remove old contribution
            if freq[num] > 0:
                curr_score = (curr_score - pow(num, freq[num], self.MOD)) % self.MOD

            # Increase frequency
            freq[num] += 1

            # Add new contribution
            curr_score = (curr_score + pow(num, freq[num], self.MOD)) % self.MOD

            # Remove the element leaving the window
            if i >= k:
                left = nums[i - k]

                curr_score = (curr_score - pow(left, freq[left], self.MOD)) % self.MOD

                freq[left] -= 1

                if freq[left] == 0:
                    del freq[left]
                else:
                    curr_score = (curr_score + pow(left, freq[left], self.MOD)) % self.MOD

            # Update answer
            if i >= k - 1:
                max_score = max(max_score, curr_score)

        return max_score