class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        freq = Counter(tasks)
        minimum_rounds = 0

        for count in freq.values():
            if count == 1:
                return -1

            if count % 3 == 0:
                minimum_rounds += count // 3
                
            else:
                minimum_rounds += count // 3 + 1

        return minimum_rounds