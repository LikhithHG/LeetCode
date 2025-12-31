class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        remainders = collections.defaultdict(int)
        ret = 0

        for t in time:
            # check if a % 60 == 0 && b % 60 == 0
            if t % 60 == 0: 
                ret += remainders[0]
            
            # check if a % 60 + b % 60 == 60
            else: 
                ret += remainders[60 - t % 60]
            
            # remember to update the remainders
            remainders[t % 60] += 1 
            
        return ret