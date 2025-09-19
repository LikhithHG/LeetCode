class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        minheap = []
        range_start = 0
        range_end = float('inf')
        max_val = float('-inf')

        #push first element of all the lists
        # (value, list_index, element_index) => (value, row, col) to minheap 
        for i in range(len(nums)):
            heappush(minheap, (nums[i][0], i, 0))
            max_val = max(max_val, nums[i][0])

        #Always heap will have same number of tuples as the length of the nums 
        #because every list will always have atleast one of its tuple in heap
        #so check until we cannot proceed
        while len(minheap) == len(nums):
            min_val, row, col = heappop(minheap)

            #update the smallest range
            if max_val - min_val < range_end - range_start:
                range_start = min_val
                range_end = max_val
            
            #check if we can go to the next element in the same list
            if col + 1 < len(nums[row]):
                heappush(minheap, (nums[row][col + 1], row, col + 1))
                max_val = max(max_val, nums[row][col + 1])
        
        return [range_start, range_end]