from collections import Counter 
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        left = 0
        right = 0
        track = set()
        count_seen = 0
        answer = []

        count = Counter(s)

        while right < len(s):
            track.add(s[right])
            count[s[right]] -= 1
            if count[s[right]] == 0:
                count_seen += 1
                if count_seen == len(track):
                    answer.append(right - left + 1)
                    left = right + 1
                    right = right + 1
                    track = set()
                    count_seen = 0
                    continue
            
            right += 1

        return answer    