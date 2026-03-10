class Solution:
    def maxSatisfaction(self, satisfaction: List[int]) -> int:
        satisfaction.sort()
        
        max_satisfaction = 0
        suffix_sum = 0
        
        # Iterate backward from the end of the list
        for i in range(len(satisfaction) - 1, -1, -1):
            if suffix_sum + satisfaction[i] > 0:
                # Total satisfaction with all dishes so far
                suffix_sum += satisfaction[i]
                # Adding one instance of previous dishes as we add one more dish on the left
                max_satisfaction += suffix_sum
                
            else:
                # Stop when adding the next dish decreases the overall satisfaction
                break
                
        return max_satisfaction