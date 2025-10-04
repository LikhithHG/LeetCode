class Solution:
    def maximumCoins(self, heroes: List[int], monsters: List[int], coins: List[int]) -> List[int]:
        answer = [0] * len(heroes)

        monsterCoins = sorted(zip(monsters, coins), key = lambda x: x[0])
        coinsSum = [0] * len(coins)
        prefixSum = 0

        for i, (_, coin) in enumerate(monsterCoins):
            prefixSum += coin
            coinsSum[i] = prefixSum
        
        for i, hero in enumerate(heroes):
            answer[i] = self.findTotalCoins(monsterCoins, hero, coinsSum)
        
        return answer

    def findTotalCoins(self, monsterCoins, hero, coinsSum):
        left, right = 0, len(monsterCoins) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if monsterCoins[mid][0] > hero:
                right = mid - 1
            else:
                left = mid + 1
            
        if left == 0 and monsterCoins[left][0] > hero:
                return 0
            
        return coinsSum[right]