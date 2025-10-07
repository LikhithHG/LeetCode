class Solution:
    def distinctNumbers(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        answer = [0] * (n - k + 1)

        freq = {}

        #first Window
        for i in range(k):
            freq[nums[i]] = freq.get(nums[i], 0) + 1
        answer[0] = len(freq)

        for i in range(k, n):
            left = nums[i - k]
            freq[left] -= 1
            if freq[left] == 0:
                del freq[left]
            
            right = nums[i]
            freq[right] = freq.get(right, 0) + 1

            answer[i - k + 1] = len(freq)
        
        return answer