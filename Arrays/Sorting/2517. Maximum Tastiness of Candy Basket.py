class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price.sort()
        def can_pick(x):
            count = 1  # always pick first candy
            last = price[0]

            for p in price[1:]:
                if p - last >= x:
                    count += 1
                    last = p

                if count >= k:
                    return True

            return False

        # Binary search on the possible difference
        l, r = 0, price[-1] - price[0]
        ans = 0

        while l <= r:
            mid = (l + r) // 2

            if can_pick(mid):
                ans = mid     # possible, try for bigger diff
                l = mid + 1

            else:
                r = mid - 1
                
        return ans