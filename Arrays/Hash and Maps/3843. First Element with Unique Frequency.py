class Solution:
    def firstUniqueFreq(self, nums: List[int]) -> int:
        if not nums:
            return -1
        
        counter = defaultdict(int)

        for num in nums:
            counter[num] += 1
        
        frequency = defaultdict(int)

        for count in counter.values():
            frequency[count] += 1
        
        for num in nums:
            count = counter[num]

            if frequency[count] == 1:
                return num
        
        return -1