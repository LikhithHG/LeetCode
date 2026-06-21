class Solution:
    def filterCharacters(self, s: str, k: int) -> str:
        count = Counter(s)
        result = []

        for letter in s:
            if count[letter] < k:
                result.append(letter)
            
        return "".join(result)