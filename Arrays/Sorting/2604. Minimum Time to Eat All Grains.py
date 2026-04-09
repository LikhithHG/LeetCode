class Solution:
    def minimumTime(self, hens: List[int], grains: List[int]) -> int:
        def can_finish(hens, grains, t):
            n = len(grains)
            r = 0

            for hen in hens:
                budget = t

                # move backward
                if hen > grains[r]:

                    if hen - grains[r] > t:
                        return False

                    diff = hen - grains[r]

                    if 3 * diff >= budget:
                        budget = (budget - diff) // 2

                    else:
                        budget -= 2 * diff

                while r < n and grains[r] - hen <= budget:
                    r += 1

                if r == n:
                    return True

            return False

        hens.sort()
        grains.sort()

        left, right = 0, int(2e9 + 1)

        while left < right:
            mid = (left + right) // 2

            if can_finish(hens, grains, mid):
                right = mid
                
            else:
                left = mid + 1

        return left