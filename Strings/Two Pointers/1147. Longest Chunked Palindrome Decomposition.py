class Solution:
    def longestDecomposition(self, text: str) -> int:
        left, right, chunk_count = 0, len(text) - 1, 0
        
        while left < right:
            # Check if the start and end substrings match
            if text[:left + 1] == text[right:]:
                chunk_count += 2  # Two matching chunks found
                text = text[left + 1:right]  # Update s to remaining substring
                left, right = 0, len(text) - 1  # Reset pointers

            else:
                left += 1
                right -= 1
        
        # Add one if there's any substring left (middle character)
        if text:
            chunk_count += 1
        
        return chunk_count