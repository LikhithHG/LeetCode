class MedianFinder:

    def __init__(self):
        self.number = []
        

    def addNum(self, num: int) -> None:
        self.number.append(num)
        

    def findMedian(self) -> float:
        n = len(self.number)
        self.number = sorted(self.number)
        if n % 2 != 0:
            return float(self.number[(n // 2)])
        else:
            median = self.number[n // 2] + self.number[(n // 2) - 1]
            return median / 2
        


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()