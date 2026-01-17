class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        n = len(cardPoints)
        requiredSubarrayLength = n - k

        # Total score of all cards
        totalScore = sum(cardPoints)

        # If we take all cards
        if k == n:
            return totalScore

        startingIndex = 0
        presentSubarrayScore = 0
        minSubarrayScore = totalScore

        for i in range(n):
            presentSubarrayScore += cardPoints[i]
            presentSubarrayLength = i - startingIndex + 1

            # If window size equals n - k
            if presentSubarrayLength == requiredSubarrayLength:
                minSubarrayScore = min(minSubarrayScore, presentSubarrayScore)
                presentSubarrayScore -= cardPoints[startingIndex]
                startingIndex += 1

        return totalScore - minSubarrayScore