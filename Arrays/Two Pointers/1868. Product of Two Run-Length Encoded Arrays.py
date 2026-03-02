class Solution:
    def findRLEArray(self, encoded1: List[List[int]], encoded2: List[List[int]]) -> List[List[int]]:
        i, j = 0, 0
        res = []

        while i < len(encoded1) and j < len(encoded2):
            product = encoded1[i][0] * encoded2[j][0]
            length = min(encoded1[i][1], encoded2[j][1])

            if res and res[-1][0] == product:
                res[-1][1] += length

            else:
                res.append([product, length])

            encoded1[i][1] -= length
            encoded2[j][1] -= length

            if encoded1[i][1] == 0:
                i += 1

            if encoded2[j][1] == 0:
                j += 1
                
        return res