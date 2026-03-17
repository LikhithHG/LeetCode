class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        sums = sum(num for num in nums if num % 2 == 0)
        answer = []

        for value, index in queries:
            if nums[index] % 2 == 0:
                sums -= nums[index]
            
            nums[index] += value

            if nums[index] % 2 == 0:
                sums += nums[index]
            
            answer.append(sums)
        
        return answer