class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        answer = []
        sizeToGrp = {}

        for i, size in enumerate(groupSizes):
            if size not in sizeToGrp:
                sizeToGrp[size] = []
            
            sizeToGrp[size].append(i)

            #if the group is full append to answer and delete
            if len(sizeToGrp[size]) == size:
                answer.append(sizeToGrp[size])
                del sizeToGrp[size]
        
        return answer