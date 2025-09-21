class Solution:
    def partitionString(self, s: str) -> int:
        seen = set()
        answer = 1
        right = 0

        while right < len(s):
            if s[right] in seen:
                answer += 1
                seen.clear()
            seen.add(s[right])
            right += 1
        return answer        