class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        begin = 0
        answer = 0
        end = 0
        current_sum = 0
        number_index = {}

        while end < len(nums):
            current_number = nums[end]
            last_occurance = number_index.get(current_number, -1)

            #check if the number already exisited in window or window size is exceeding
            while begin <= last_occurance or end - begin + 1 > k:
                current_sum -= nums[begin]
                begin += 1

            number_index[current_number] = end
            current_sum += current_number
            if end - begin + 1 == k:
                answer = max(answer, current_sum)
            
            end += 1
        
        return answer
