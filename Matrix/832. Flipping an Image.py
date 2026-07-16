class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        result = []

        for i in image:
            i.reverse()
            result.append([x ^ 1 for x in i])
        return result