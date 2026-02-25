class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        if maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal:
            return False

        if desiredTotal <= maxChoosableInteger:
            return True

        dp = {}

        def dfs(mask: int, current: int):
            if mask in dp:
                return dp[mask]

            for i in range(maxChoosableInteger):
                if mask & (1 << i):
                    continue

                if i + 1 + current >= desiredTotal or not dfs(mask | (1 << i), current + i + 1):
                    dp[mask] = True
                    return True

            dp[mask] = False
            return False

        return dfs(0, 0)