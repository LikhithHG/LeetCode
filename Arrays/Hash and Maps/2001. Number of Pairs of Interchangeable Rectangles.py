class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        freq = Counter()

        for w, h in rectangles:
            g = gcd(w, h)
            freq[(w // g, h // g)] += 1
            
        return sum(c * (c - 1) // 2 for c in freq.values())