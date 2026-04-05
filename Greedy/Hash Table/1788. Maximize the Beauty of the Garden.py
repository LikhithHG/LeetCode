class Solution:
    def maximumBeauty(self, flowers: List[int]) -> int:
        d = defaultdict(list)
        neg = []

        for i, f in enumerate(flowers):
            d[f].append(i)

            if f < 0:
                neg.append(i)

        p = list(itertools.accumulate(flowers))
        res = float('-inf')

        for k in d: 

            if len(d[k]) >= 2:
                low = d[k][0] 
                high = d[k][-1]

                if low <= 0:
                    cur = p[high]

                else:
                    cur = p[high] - p[low - 1]

                for n in neg:

                    if low + 1 <= n < high:
                        cur -= flowers[n]
                
                res = max(res, cur)
                
        return res