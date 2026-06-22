class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        #sort the array in descending orfer
        cost.sort(key = lambda x : -x)
        result = 0
        n = len(cost)

        for i in range(n):
            #count every candy index that are not multiple of 2 like 0, 1, 3, 4, 6, 7 .....
            if i % 3 != 2:
                result += cost[i]
            
        return result