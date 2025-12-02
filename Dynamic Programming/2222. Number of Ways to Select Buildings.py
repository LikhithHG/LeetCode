class Solution:
    def numberOfWays(self, s: str) -> int:
        totalZero = s.count("0")
        totalOne = len(s) - totalZero

        countZero, countOne = 0, 0
        ways = 0

        for i in range(len(s)):
            if s[i] == "0":
                ways += countOne * (totalOne - countOne)
                countZero += 1

            else:
                ways += countZero * (totalZero - countZero)
                countOne += 1
                
        return ways