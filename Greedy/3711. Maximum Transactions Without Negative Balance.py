class Solution:
    def maxTransactions(self, transactions: List[int]) -> int:
        current, result, priQueue = 0, 0, []

        for transaction in transactions:
            if transaction < 0:
                if current + transaction >= 0:
                    current += transaction
                    heappush(priQueue, transaction)
                    result += 1

                elif priQueue and priQueue[0] < transaction:
                    current += transaction - heappop(priQueue)
                    heappush(priQueue, transaction)
            
            else:
                current += transaction
                result += 1
        
        return result