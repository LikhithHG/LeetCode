class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        scores = defaultdict(list)
        for student, score in items:
            heapq.heappush(scores[student],score)
            if len(scores[student])>5:
                heapq.heappop(scores[student])
        res = []
        for s in sorted(scores):
            tot = sum(scores[s])//5
            res.append([s,tot])
        return res