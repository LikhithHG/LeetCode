class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        adj = [[] for _ in range(n)]

        for source, destination, price in flights:
            adj[source].append((destination, price))
        
        # Each element in pq: (cost, node, stops)
        pq = [(0, src, 0)]
        stops = [inf] * n

        while pq:
            distance, node, steps = heapq.heappop(pq)

            #if we can reach in less stops
            if steps >= stops[node] or steps > k + 1:
                continue
            
            stops[node] = steps

            # If we reached destination, return cost
            if node == dst:
                return distance
            
            # Explore neighbors
            for neighbour, price in adj[node]:
                heapq.heappush(pq, (distance +  price, neighbour, steps + 1))
        
        return -1