class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        total = len(names)

        sortedHeights = sorted(range(total), key = lambda i: heights[i], reverse = True)

        sortedNames = [names[i] for i in sortedHeights]

        return sortedNames