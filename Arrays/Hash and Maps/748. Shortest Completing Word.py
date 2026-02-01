class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        def count(itera):
            ans = [0] * 26
            for letter in itera:
                ans[ord(letter) - ord('a')] += 1
            return ans

        def dominates(c1, c2):
            return all(x1 >= x2 for x1, x2 in zip(c1, c2))

        ans = None
        target = count(c.lower() for c in licensePlate if c.isalpha())
        for word in words:
            if ((ans is None or len(word) < len(ans)) and dominates(count(word.lower()), target)):
                ans = word

        return ans