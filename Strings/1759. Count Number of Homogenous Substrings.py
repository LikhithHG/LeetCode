class Solution(object):
    def countHomogenous(self, s):
        """
        :type s: str
        :rtype: int
        """
        answer = 0
        curr_streak = 0
        MOD = 10 ** 9 + 7

        for i in range(len(s)):
            if i == 0 or s[i] == s[i - 1]:
                curr_streak += 1
            else:
                curr_streak = 1
            answer = (answer + curr_streak) % MOD
        
        return answer