class Solution:
    def equalizeWater(self, buckets: List[int], loss: int) -> float:
        lo, hi, eps, k = 0, max(buckets), 10 ** -5, (100 - loss) / 100

        while hi - lo > eps:
            v = (lo + hi) / 2

            if sum(x - v for x in buckets if v < x) * k >= sum(v - x for x in buckets if v > x):
                lo = v

            else:
                hi = v

        return lo