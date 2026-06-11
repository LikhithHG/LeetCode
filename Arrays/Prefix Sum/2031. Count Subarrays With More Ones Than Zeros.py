class Solution:
    def subarraysWithMoreOnesThanZeroes(self, nums: List[int]) -> int:
        store = defaultdict(int)
        store[0] = 1

        prefixSum = 0
        output = 0
        diff = 0

        for item in nums:          

            if item:
                prefixSum += store[diff]
                diff += 1
                
            else:
                diff -= 1
                prefixSum -= store[diff]
                
            output += prefixSum
            store[diff] += 1
            
        return output % (10 ** 9 + 7)