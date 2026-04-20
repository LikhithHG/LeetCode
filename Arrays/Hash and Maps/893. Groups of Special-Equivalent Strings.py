class Solution:
    def numSpecialEquivGroups(self, words: List[str]) -> int:
        def count(words):
            ans = [0] * 52

            for i, letter in enumerate(words):
                ans[ord(letter) - ord('a') + 26 * (i%2)] += 1
                
            return tuple(ans)

        return len({count(word) for word in words})