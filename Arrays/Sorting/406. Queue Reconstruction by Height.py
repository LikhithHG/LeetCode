class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        people.sort(key = lambda x: (-x[0], x[1]))
        answer = []

        for pep in people:
            #insert(position, value_to_be_inserted)
            answer.insert(pep[1], pep)
        
        return answer