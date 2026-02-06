class Solution:
    def brightestPosition(self, lights: List[List[int]]) -> int:
        dic = defaultdict(int)

        for a, b in lights:
            dic[a - b] += 1
            dic[a + b + 1] -= 1
        cur, max_val, idx = 0, -inf, 0

        for i, val in sorted(dic.items()):
            cur += val
            if cur > max_val:
                max_val = cur
                idx = i
                
        return idx