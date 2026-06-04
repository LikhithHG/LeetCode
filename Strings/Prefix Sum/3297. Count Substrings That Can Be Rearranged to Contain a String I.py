class Solution:
    def validSubstringCount(self, word1: str, word2: str) -> int:
        cnt = collections.Counter(word2)
        match, res, j = len(cnt), 0, 0

        for i, ch in enumerate(word1):
            cnt[ch] -= 1
            match -= cnt[ch] == 0

            while match == 0:
                match += cnt[word1[j]] == 0
                cnt[word1[j]] += 1
                j += 1

            res += j

        return res