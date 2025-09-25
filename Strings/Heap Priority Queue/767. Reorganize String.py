class Solution:
    def reorganizeString(self, s: str) -> str:
        countmap = Counter(s)
        heap = []
        #heap = list(map(lambda a: -a, list(count.values())))

        for key in countmap:
            heap.append((-countmap[key], key))
        
        heapq.heapify(heap)

        result = ''

        previous = None

        while heap:

            (value1, first) = heapq.heappop(heap)
            if previous != first:
                result += first
                value1 = -value1
                value1 -= 1
                previous = first
                if value1 != 0:
                    heapq.heappush(heap, (-value1, first))

            else:
                if not heap:
                    return ''
                (value2, second) = heapq.heappop(heap)
                result += second
                value2 = -value2
                value2 -= 1
                previous = second
                if value2 != 0:
                    heapq.heappush(heap, (-value2, second))
                
                heapq.heappush(heap, (value1, first))
                
        return result