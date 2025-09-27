class Solution:
    def minimumHealth(self, damage: List[int], armor: int) -> int:
        maximum = max(damage)
        total = sum(damage)

        return total - min(maximum, armor) + 1        